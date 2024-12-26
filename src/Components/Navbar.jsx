import '../index.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white bg-slate-800 flex p-3 justify-center '>
            <div className='flex justify-between w-4/5'>

                <h1 className='font-bold text-xl'>&lt;Pass<span className='text-green-500'>OP/&gt;</span> </h1>
                <ul className='flex  justify-around gap-4'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar


