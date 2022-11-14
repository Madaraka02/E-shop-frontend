import axios from "axios";


const BASE_URL = 'http://127.0.0.1:8000'
const API_BASE = '/api/v1'
const REGISTER_URL = '/auth/signup/'
const LOGIN_URL = '/auth/token/'

const headers = {
    Accept:'application/json',
    'Content-Type':'application/json'
}

const register = async (userData) => {
    const response = await axios.post(`${BASE_URL}${API_BASE}${REGISTER_URL}`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(`${BASE_URL}${API_BASE}${LOGIN_URL}`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService
