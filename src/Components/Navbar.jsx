import '../index.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white bg-slate-800 flex p-3 justify-center ' style={{height: '8%'}}>
            <div className='flex justify-between w-4/5 items-center'>

                <h1 className='font-bold text-xl'>&lt;Pass<span className='text-green-500'>OP/&gt;</span> </h1>
              
            </div>
        </nav>
    )
}

export default Navbar


