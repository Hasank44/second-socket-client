import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='p-2'>
          <div className='flex gap-3'>
              <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#3b3a3f] text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className='cursor-pointer'>
                  <IoSearch className='right-6 text-2xl top-5 text-gray-400' />
              </button>
          </div>
    </div>
  )
}

export default Search