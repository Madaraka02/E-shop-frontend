import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"
import  { reset, login } from '../features/auth/authSlice'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    useEffect(()=> {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            // navigate to home
            console.log('done')
        }
        dispatch(reset())

    }, [user,isError,isSuccess, message, dispatch])

    const handleLogin = (e) => {
        e.preventDefault();
        const userData={
            username,
            password
        }
        dispatch(login(userData))
        // dispatch(reset())

    }
    console.log(user?.access)
    if(isLoading){
        return <div>
            <p>Loading</p>
        </div>
    }
  return (
    <>
    <div className="container mx-auto py-20 px-2">
        {user ? <>User Loged in</>
        :
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
        <button
        onClick={handleLogin}
         className='rounded-md px-4 py-2 w-full bg-slate-700 text-white text-center text-sm' type='submit'>
            Login</button>
            </div>
        </div>


    </form>
}
    </div>
    </>

  )
}

export default Login