import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='w-full bg-[#131222] text-white sticky top-0 z-50 shadow-md'>
            <div className='container mx-auto flex items-center justify-between h-12'>
                <div className='text-gray-200'>
                    Chat App
               </div>
                <div>
                    <IoIosLogOut title='logout' className='text-2xl cursor-pointer' />
               </div>
            </div>
        </nav>
    )
}

export default Navbar