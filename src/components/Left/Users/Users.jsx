import React, { useContext, useState } from "react";
import { ChatUserContext } from "../../../Context/ChatUserProvider";

const Users = () => {
    const { setChatUsers } = useContext(ChatUserContext);
    const users = [
        { _id: 1, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
        { _id: 2, name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
        { _id: 3, name: "Bob Johnson", avatar: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
        { _id: 4, name: "Alice Williams", avatar: "https://randomuser.me/api/portraits/women/4.jpg", online: false },
        { _id: 5, name: "Charlie Brown", avatar: "https://randomuser.me/api/portraits/men/5.jpg", online: true },
        { _id: 6, name: "Emma Stone", avatar: "https://randomuser.me/api/portraits/women/6.jpg", online: false },
        { _id: 7, name: "Sophia Turner", avatar: "https://randomuser.me/api/portraits/women/7.jpg", online: false },
        { _id: 8, name: "David Wilson", avatar: "https://randomuser.me/api/portraits/men/8.jpg", online: true },
        { _id: 9, name: "Eva Davis", avatar: "https://randomuser.me/api/portraits/women/9.jpg", online: false },
        { _id: 10, name: "Frank Miller", avatar: "https://randomuser.me/api/portraits/men/10.jpg", online: true },
    ];

    const [selectedUser, setSelectedUser] = useState(null);

    const select = (user) => {
        setSelectedUser(user);
        setChatUsers(user);
    };
    return (
        <div className="h-[560px] bg-[#02020e] rounded-xl flex flex-col py-4">
            <div className="flex-1 overflow-y-auto px-2 space-y-1">
                {users.map(user => (
                    <div
                        key={user._id}
                        onClick={() => select(user)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
              ${selectedUser?._id === user._id ? "bg-indigo-600/30" : "hover:bg-[#3b3a3f]"}
            `}
                    >
                        <div className="relative">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            {user?.online ?
                                <span className={`absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1f1f23] rounded-full`} />
                                : <span className={`absolute bottom-0 right-0 w-3 h-3 bg-[#575656] border-2 border-[#1f1f23] rounded-full`} />
                            }
                        </div>

                        <div className="text-white font-medium">{user.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
