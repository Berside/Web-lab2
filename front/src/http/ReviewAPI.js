import {$authHost, $host} from "./index";

export const CreateReview = async ( name, email, rating, text) => {
    const {data} = await $host.post('api/v1/review/create', {  name, email, rating, text })
    const response = await data.json();
    return (response)
}