import React from 'react'
import User from './User/ChatUser'
import Send from './Send/Send'
import Message from './Message/Message'

const Right = () => {
  return (
    <div className='w-[75%] bg-[#05020f] h-full flex flex-col justify-between'>
      <div className='top-0 w-full'>
        <User />
      </div>
      <div className='w-full'>
        <Message />
      </div>
      <div className='bottom-0 w-full'>
        <Send />
      </div>
    </div>
  )
}

export default Right