import { Outlet } from "react-router"
import Home from "./components/Home/Home"
import Navbar from "./components/shared/Navbar"

function App() {

  return (
    <>
      <div className="w-full ">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
