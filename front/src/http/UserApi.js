import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, password) => {
    const {data} = await $host.post('api/v1/user/registration', {login, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/v1/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/v1/user/auth' )
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.userId)
    return jwtDecode(data.token)
}