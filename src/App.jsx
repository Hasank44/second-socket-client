import { Outlet } from "react-router"
import Navbar from "./components/shared/Navbar"
import { useContext } from "react"
import { UserContext } from "./Context/UserProvider"

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      <div className="w-full ">
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}

export default App
