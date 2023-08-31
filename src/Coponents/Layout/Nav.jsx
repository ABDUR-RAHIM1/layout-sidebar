import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav({ item, show }) {
    const path = useLocation().pathname;
   console.log(show)
    return (
        <Link
            className={` ${show && "pl-2"} ${path === item.link ? "active" : ""} flex gap-2 items-center mt-5 text-xl text-white capitalize hover:bg-slate-500 py-2 px-3`}
            to={item.link}>
            <div className={`${show && "text-3xl"} mt-1 text-2xl duration-500`}>
                {item.icon}
            </div>
            <div className={`${show ? "scale-0" : ""} duration-500`}>
                {item.item}
            </div>
        </Link>
    )
}

export default Nav