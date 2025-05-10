import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, password, Name, Numberr) => {
    const {data} = await $host.post('api/v1/user/registration', {login, password, Name, Numberr,   role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login = async (login, password) => {
    const {data} = await $host.post('api/v1/user/login', {login, password})
    localStorage.setItem('token', data.token)
    console.log(data);
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/v1/user/auth' )
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.userId)
    return jwtDecode(data.token)
}
export const getUserIdByEmail = async (email) => {
    const {data} = await $host.get('api/v1/user/getUserIdByEmail', {
        params: {email} 
    });
    return data;
}