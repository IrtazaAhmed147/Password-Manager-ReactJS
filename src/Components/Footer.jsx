import React from 'react'

const Footer = () => {
    return (

        <footer className='text-white bg-slate-800 p-1 justify-center h-1/6 flex flex-col items-center'>
            <h1 className='font-bold text-xl'>&lt;Pass<span className='text-green-500'>OP/&gt;</span> </h1>
            <p className='flex'>Created with
                <span>

                    <lord-icon
                        src="https://cdn.lordicon.com/ulnswmkk.json"
                        trigger="hover"
                        colors="primary:#e83a30"
                        style={{ width: '25px', height: '25px' }}>
                    </lord-icon>
                </span>
                by IrtazaAhmed</p>
        </footer>

    )
}

export default Footer
