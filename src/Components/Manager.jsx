import React from 'react'
import { IoEye } from 'react-icons/io5'

const Manager = () => {
    return (
        <div className='w-4/5 flex flex-col gap-4 '>
            <div>

                <h1 className='font-bold text-xl text-center'>&lt;Pass<span className='text-green-500'>OP/&gt;</span> </h1>
                <p className='text-center'>Your own Password Manager</p>
            </div>
            <div className='flex flex-col gap-7 items-center'>

                <input className='border-2 w-full rounded-2xl border-green-500 p-1 px-6 outline-none' type='url' placeholder='Enter website URL' />
                <div className='flex justify-between w-full'>

                    <input className='border-2 w-3/4 rounded-2xl border-green-500 p-1 px-6 outline-none' type="text" placeholder='Enter Username' />

                    <div className='w-1/5 bg-white  flex justify-between items-center border-2 rounded-2xl border-green-500 p-1 px-2 gap-2'>
                        <input className='w-4/5 outline-none rounded-md' type="password" placeholder='Password' />
                        <IoEye size='20px' />
                    </div>
                </div>

                <button type='submit' className='border-2 border-green-700 bg-green-400 w-1/6 flex items-center justify-center rounded-3xl py-2 gap-1' >
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                        style={{ width: '20px', height: '20px' }}>
                    </lord-icon>
                    Save</button>

            </div>

            <div>
                <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>
                <table class="table-auto w-full rounded-md overflow-hidden mb-10">
                    <thead className='bg-green-700 text-white '>
                        <tr>
                            <th className='py-2'>Site</th>
                            <th className='py-2'>Username</th>
                            <th className='py-2'>Password</th>
                            <th className='py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 border border-white text-center bg-green-100'>
                                <div className='flex items-center justify-center items-center'>
                                    <a target='_blank' href="/">www.facebook.com</a>
                                    <div className='lordiconcopy size-7 cursor-pointer' >
                                        <lord-icon
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover" >
                                        </lord-icon>
                                    </div>
                                </div>

                            </td>
                            <td className='py-2 border border-white text-center bg-green-100'>
                                <div className='flex items-center justify-center items-center'>
                                    <span>Irtaza</span>
                                    <div className='lordiconcopy size-7 cursor-pointer' >
                                        <lord-icon
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover" >
                                        </lord-icon>
                                    </div>
                                </div>
                            </td>
                            <td className='py-2 border border-white text-center bg-green-100'>
                                <div className='flex items-center justify-center items-center'>
                                    <span>Irtaza</span>
                                    <div className='lordiconcopy size-7 cursor-pointer' >
                                        <lord-icon
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover" >
                                        </lord-icon>
                                    </div>
                                </div>
                            </td>
                            <td className='justify-center py-2 border border-white text-center bg-green-100'>

                                <span className='cursor-pointer mx-1' >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/tobsqthh.json"
                                        trigger="hover"
                                        style={{ "width": "25px", "height": "25px" }}>
                                    </lord-icon>
                                </span>
                                <span className='cursor-pointer mx-1'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        style={{ "width": "25px", "height": "25px" }}>
                                    </lord-icon>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Manager
