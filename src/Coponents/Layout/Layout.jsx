import React, { useState } from 'react'
import { BiRightArrow } from "react-icons/bi"
import Sidebar from './sidebar'

function Layout({ children }) {
  const [show, setShow] = useState(true)
  console.log(show)
  const hadnleClick = () => {
    setShow(!show)
  }
  return (
    <div className='flex'>
      <div className={`${show ? "w-20" : "w-72"} duration-500 relative bg-slate-700 h-screen`}>
        <BiRightArrow
          onClick={hadnleClick}

          className={`${!show && "rotate-180"} duration-500 bg-slate-700 p-2 rounded-md text-4xl text-white cursor-pointer hover:text-slate-200 absolute top-2 -right-7`} />

        <Sidebar
          show={show}
        />
      </div>
      <div className="main text-4xl py-5 px-2 flex-1">
        {children}
      </div>
    </div>
  )
}

export default Layout