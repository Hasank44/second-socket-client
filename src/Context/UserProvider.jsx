import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const accessToken = localStorage.getItem('accessToken');
    const api_url = import.meta.env.VITE_API_URL;
    const getUser = async () => {
        if (!accessToken) return;
        try {
            setLoading(true);
            const response = await axios.get(`${api_url}/v1/user/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setUser(response?.data?.result);
            setLoading(false);
        } catch (error) {
            if (!error?.response?.data?.result || error?.response?.data?.result?.message === "Invalid or Expired Token") {
                localStorage.removeItem('accessToken');
                setUser(null);
            } else {
                toast.error(error?.response?.data?.message || "Failed to fetch user data");
            };
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        if (!api_url) return;
        getUser();
    }, [api_url]);

    const values = {
        loading,
        user,
        setUser,
        getUser
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider