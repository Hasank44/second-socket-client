import React, { useContext } from "react";
import { ChatUserContext } from "../../../Context/ChatUserProvider";

const messages = [
  {
    id: 1,
    text: "Hey! How are you?",
    sender: "1",
    time: "10:30 AM",
  },
  {
    id: 2,
    text: "I'm good 😄 What about you?",
    sender: "me",
    time: "10:31 AM",
  },
  {
    id: 3,
    text: "Doing great! Are you working on the chat app?",
    sender: "2",
    time: "10:32 AM",
  },
  {
    id: 4,
    text: "Yes 🔥 almost done!",
    sender: "me",
    time: "10:33 AM",
  },
];

const Message = () => {

  return (
    <div className="px-6 h-[430px] space-y-1 overflow-y-auto">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[70%] px-4 py-1 rounded-xl text-sm shadow
              ${msg.sender === "me"
                ? "bg-indigo-600 text-white rounded-br-none"
                : "bg-[#2b2b31] text-white rounded-bl-none"}
            `}
          >
            <p>{msg.text}</p>
            <span className="block text-[10px] text-gray-300 mt-1 text-right">
              {msg.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
