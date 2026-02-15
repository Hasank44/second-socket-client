import React, { useContext, useState } from 'react'
import { IoIosLogOut } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../Context/UserProvider';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AddFriend from '../pages/AddFriend/AddFriend';


const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const api_url = import.meta.env.VITE_API_URL;

    const handleLogout = async () => {
        if (!user) return;
        try {
            const response = await axios.post(`${api_url}/v1/user/logout`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            toast.success(response?.data?.message);
            setUser(null);
            localStorage.removeItem('accessToken');
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
    const toggleAddFriend = () => {
        setIsAddFriendOpen(!isAddFriendOpen);
    };
    return (
            <nav className='w-full bg-[#131222] text-white sticky top-0 z-50 shadow-md'>
                <ToastContainer position="top-right" autoClose={5000} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
                <div className='container mx-auto flex items-center justify-between h-12'>
                    <div className='text-gray-200'>
                        Chat App
                    </div>
                    <div className='flex gap-2.5'>
                        <FaUserFriends
                            title='Add Friend'
                            onClick={toggleAddFriend}
                            className='text-2xl cursor-pointer'
                        />
                        {user ? (
                            <IoIosLogOut
                                onClick={handleLogout}
                                title='logout'
                                className='text-2xl cursor-pointer'
                            />) : (
                            <CiLogout
                                title='login'
                                onClick={() => navigate('/user/login')}
                                className='text-2xl cursor-pointer'
                            />
                        )}
                    </div>
                </div>
            <AddFriend isAddFriendOpen={isAddFriendOpen} setIsAddFriendOpen={setIsAddFriendOpen} />
        </nav>
    )
}

export default Navbar