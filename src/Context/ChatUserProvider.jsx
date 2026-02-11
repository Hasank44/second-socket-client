import React, { createContext, useState } from 'react'

export const ChatUserContext = createContext();

const ChatUserProvider = ({ children }) => {
    const [chatUsers, setChatUsers] = useState(null);

    const values = {
        chatUsers,
        setChatUsers
    };
  return (
    <ChatUserContext.Provider value={values}>
      {children}
    </ChatUserContext.Provider>
  )
}

export default ChatUserProvider;
