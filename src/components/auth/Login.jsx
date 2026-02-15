import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const api_url = import.meta.env.VITE_API_URL;
    const { setUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/v1/user/login`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setUser(response?.data?.result);
            toast.success(response?.data?.message);
            localStorage.setItem('accessToken', response?.data?.token);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0b19] via-[#06090d] to-[#080c15] px-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20">
                <h1 className="text-2xl font-bold text-white text-center mb-4">
                    Login to Your Account
                </h1>
                <form className="space-y-3" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="block text-sm text-white/80 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-white/80 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
                    >
                        Login Account
                    </button>
                </form>
                <p className="text-center text-white/70 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/user/register"
                        className="text-indigo-300 hover:text-indigo-400 font-medium"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login