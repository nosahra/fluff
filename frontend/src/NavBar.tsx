import { useState } from "react"

function NavBar() {
    return (
        <nav className='flex flex-col items-centre text-centre justify-centre'>
            <ul className='text-lime-400 bg-white'>
                <li>fluff</li>
            </ul>
            <ul className='flex gap-10 bg-lime-400 content-centre justify-centre'>
                <li><a href="">About Us</a></li>
                <li><a href="">Shop Fluffs</a></li>
                <li><a href="">Shop Patterns</a></li>
            </ul>
        </nav>
    )
}

export default NavBar