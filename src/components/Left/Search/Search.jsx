import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { DataContext } from "../../../Context/DataProvider";

const Search = () => {
  const { setFilteredUsers } = useContext(DataContext);

  const result = [
    { _id: 1, name: "John Doe", email: "john@example.com", avatar: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
    { _id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
    { _id: 3, name: "Bob Johnson", email: "bob@example.com", avatar: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
    { _id: 4, name: "Alice Williams", email: "alice@example.com", avatar: "https://randomuser.me/api/portraits/women/4.jpg", online: false },
    { _id: 5, name: "Charlie Brown", email: "charlie@example.com", avatar: "https://randomuser.me/api/portraits/men/5.jpg", online: true },
  ];

  useEffect(() => {
    setFilteredUsers(result);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      setFilteredUsers(result);
      return;
    }

    const filtered = result.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );

    setFilteredUsers(filtered);
  };

  return (
    <div className="p-2">
      <div className="flex gap-3 items-center bg-[#3b3a3f] rounded-lg px-3 py-2">
        <IoSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search by name or email..."
          onChange={handleSearch}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
