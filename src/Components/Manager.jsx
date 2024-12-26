import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Manager = () => {

    const passwordRef = useRef()
    const [form, setForm] = useState({ site: '', username: '', password: '' })
    const ref = useRef()
    const [passArr, setPassArr] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')

        if (passwords) {
            setPassArr(JSON.parse(passwords))
        }
        console.log(passwords)
    }, [])

    const handleShowPass = () => {
        passwordRef.current.type = 'text'
        if (ref.current.src.includes('icons/eyecross.png')) {
            ref.current.src = 'icons/eye.png'
            passwordRef.current.type = 'password'

        } else {
            passwordRef.current.type = 'text'
            ref.current.src = 'icons/eyecross.png'

        }
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        console.log('chala')
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const savePassword = () => {
        console.log(form)
        setPassArr([...passArr, form])
        localStorage.setItem('passwords', JSON.stringify([...passArr, form]))
        console.log(passArr)
        console.log([...passArr, form])

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,232,7,0.3),rgba(0,255,36,0.1))]"></div>



            <div className='w-4/5 flex flex-col gap-4 p-3 md:mycontainer min-h-[81.5vh] res-wid'>
                <div>

                    <h1 className='font-bold text-xl text-center'>&lt;Pass<span className='text-green-500'>OP/&gt;</span> </h1>
                    <p className='text-center'>Your own Password Manager</p>
                </div>
                <div className='flex flex-col gap-4 items-center'>

                    <input value={form.site} name='site' onChange={handleChange} className='border-2 w-full rounded-2xl border-green-500 p-1 px-6 outline-none' type='url' placeholder='Enter website URL' required />
                    <div className='flex justify-between w-full'>

                        <input value={form.username} name='username' onChange={handleChange} className='border-2 w-3/4 rounded-2xl border-green-500 p-1 px-6 outline-none' type="text" placeholder='Enter Username' required />

                        <div className='w-1/5 bg-white  flex justify-between items-center border-2 rounded-2xl border-green-500 p-1 px-2 gap-2'>
                            <input value={form.password} name='password' onChange={handleChange} ref={passwordRef} className='w-4/5 outline-none rounded-md' type="password" placeholder='Password' required />
                            <span onClick={handleShowPass}>

                                <img ref={ref} className='w-5 cursor-pointer' src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} type='submit' className='border-2 border-green-700 bg-green-400 w-1/6 flex items-center justify-center rounded-3xl py-2 gap-1' >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: '20px', height: '20px' }}>
                        </lord-icon>
                        Save</button>

                </div>

                <div>
                    <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>

                    {passArr.length === 0 && <h1>No Passwords to show</h1>}
                    {passArr.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-700 text-white '>

                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passArr.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center bg-green-100'>
                                        <div className='flex items-center justify-center items-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)} >
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
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
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
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)} >
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
                            })}
                        </tbody>
                    </table>
                    }
                </div>

            </div>
        </>
    )
}

export default Manager
