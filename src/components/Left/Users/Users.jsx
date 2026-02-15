import React, { useContext, useState } from "react";
import { ChatUserContext } from "../../../Context/ChatUserProvider";
import { DataContext } from "../../../Context/DataProvider";

const Users = () => {
    const { setChatUsers } = useContext(ChatUserContext);
    const { filteredUsers } = useContext(DataContext);

    const [selectedUser, setSelectedUser] = useState(null);

    const select = (user) => {
        setSelectedUser(user);
        setChatUsers(user);
    };

    return (
        <div className="h-[550px] bg-[#02020e] rounded-xl flex flex-col pt-3">
            <div className="flex-1 overflow-y-auto px-2 space-y-1">
                {filteredUsers.map(user => (
                    <div
                        title={user.name}
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
