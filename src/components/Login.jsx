import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


  return (
    <>
    <div className="container mx-auto py-20 px-2">
    <form>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="w-full">
        <input type="text" name='username' 
        placeholder='Create username'
        required
        className='border border-gray-300 outline-none px-4 py-2 rounded-md w-full'
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="w-full">
        <input type="password" name='password' 
        placeholder='Create password' 
        required
        className='border border-gray-300 outline-none px-4 py-2 rounded-md w-full'
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="w-full">
        <button className='rounded-md px-4 py-2 w-full bg-slate-700 text-white text-center text-sm' type='submit'>
            Login</button>
            </div>
        </div>


    </form>
    </div>
    </>

  )
}

export default Login