import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className="fixed z-10 shadow w-full flex justify-between items-center bg-gray-300 px-6 py-4">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="uppercase font-bold">
        <Link className="mr-3" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
      <FaCartArrowDown className="w-8 h-auto text-mainYellow snipcart-checkout hover:cursor-pointer" />
    </nav>
  )
}

export default NavBar
