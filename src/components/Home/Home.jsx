import React from 'react'
import Left from '../Left/Left'
import Right from '../Right/Right'
import { useContext } from 'react'
import { ChatUserContext } from '../../Context/ChatUserProvider'

const Home = () => {
  const { chatUsers } = useContext(ChatUserContext);
  return (
    <div className='flex w-full'>
        <Left />
        {chatUsers ?
          <Right /> :
          <div className='flex-1 flex items-center bg-[#05020f] justify-center text-gray-400 text-lg'>
            Select a chat to start messaging
          </div>
        }
    </div>
  )
}

export default Home;