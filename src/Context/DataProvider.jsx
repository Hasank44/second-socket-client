import React, { createContext, useEffect, useState } from 'react'


export const DataContext = createContext();
const DataProvider = ({ children }) => {
    
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    const values = {
        filteredUsers,
        setFilteredUsers
    };
  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;