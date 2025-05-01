import {$authHost, $host} from "./index";

export const CreateMessage = async ( name, email, subject, message, department) => {
    const {data} = await $host.post('api/v1/message/create', { name, email, subject, message, department })
    const response = await data.json();
    return (response)
}