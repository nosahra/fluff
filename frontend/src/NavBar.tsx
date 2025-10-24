import { useState } from "react"
import trolley from './assets/trolley.svg'

function NavBar() {
    return (
        <nav className='flex flex-col fixed w-full top-0 left-0'>
            <ul className='flex justify-between items-center text-lime-400 bg-white content-center h-15 italic pr-3 pl-3'>
                <li></li>
                <li><a href="" className="text-2xl hover:not-italic">fluff</a></li>
                <li><a href=""><img src={trolley} className="w-10"></img></a></li>
            </ul>
            <ul className='flex gap-10 bg-lime-400 items-center justify-center text-white rounded-b-lg h-9 pt-1 pb-1 ml-15 mr-15'>
                <li><a href="" className="hover:text-emerald-100 hover:italic">About Us</a></li>
                <li><a href="" className="hover:text-emerald-100 hover:italic">Shop Fluffs</a></li>
                <li><a href="" className="hover:text-emerald-100 hover:italic">Shop Patterns</a></li>
            </ul>
        </nav>
    )
}

export default NavBar