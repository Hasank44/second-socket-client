import React, { useContext } from 'react'
import { ChatUserContext } from '../../../Context/ChatUserProvider'
import { FaVideo, FaPhone } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatUser = () => {
  const { chatUsers } = useContext(ChatUserContext);


  return (
    <div className='p-2'>
      {chatUsers ? (
        <div className='p-2 flex items-center justify-between bg-gray-800 rounded-t-md'>
          <div className='flex items-center gap-4'>
            <div className='relative'>
              <img src={chatUsers?.avatar} alt={chatUsers?.name} className="w-12 h-12 rounded-full object-cover" />
              {chatUsers?.online ? 
                <span className={`absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1f1f23] rounded-full`} />
                : <span className={`absolute bottom-0 right-0 w-3 h-3 bg-[#575656] border-2 border-[#1f1f23] rounded-full`} />
              }
            </div>
            <h2 className="text-white text-xl font-semibold">{chatUsers?.name}</h2>
          </div>
          <div className='flex'>
            <FaVideo className='text-white inline-block m-4 cursor-pointer' size={20} />
            <FaPhone className='text-white inline-block m-4 cursor-pointer' size={20} />
            <BsThreeDotsVertical className='text-white inline-block m-4 cursor-pointer' size={20} />
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-full text-white'>
          Select a user to start chat
        </div>
      )}
    </div>
  )
}

export default ChatUser
