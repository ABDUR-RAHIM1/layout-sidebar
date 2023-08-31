import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { FaHome } from "react-icons/fa"
import { FiMoreVertical } from "react-icons/fi"
import { FcAbout, FcBusinessContact } from "react-icons/fc"
import Nav from './Nav'
function Sidebar(props) { 
    const {show} = props
    // console.log(show)
    const nav = [
        { item: "home", link: "/", icon: <FaHome /> },
        { item: "about", link: "/about", icon: <FcAbout /> },
        { item: "contact", link: "/contact", icon: <FcBusinessContact /> },
        { item: "more", link: "/more", icon: <FiMoreVertical /> },
    ]
    return (
        <div className='p-4'>
         
            <div className={`${show ? "pl-0" : "pl-3"} flex items-center  `}> 
                <img className={` w-10`} src={logo} alt="" />
                <h2 className={`${show ? "scale-0" : ""} duration-500 text-3xl text-white pl-3`}>Sidebar</h2>
            </div>
            <hr className='my-3' />

            {
                nav.map((item , index)=>(
                     <Nav 
                       key={index}
                       show={show}
                       item={item}
                     />
                ))
            }
        </div>
    )
}

export default Sidebar