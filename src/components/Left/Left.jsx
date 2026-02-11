import React from 'react'
import Search from './Search/Search'
import Users from './Users/Users'

const Left = () => {
  return (
    <div className='w-[25%] bg-[#040317]'>
      <div className=''>
        <Search className="w-full z-40" />
        <Users />
      </div>
    </div>
  )
}

export default Left
