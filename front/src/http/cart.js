import {$authHost, $host} from "./index";

export const addToCart = async (userId, tovarId, quantity = 1) => {
    const {data} = await $host.post('api/v1/cart', { userId, tovarId, quantity });
    return data;
}

export const getUserCart = async (userId) => {
    const {data} = await $host.get(`api/v1/cart/${userId}`);
    return data;
}

export const updateCartItemQuantity = async (userId, tovarId, quantity) => {
    const {data} = await $host.put(`api/v1/cart/${userId}/${tovarId}`, { quantity });
    return data;
}

export const removeFromCart = async (userId, tovarId) => {
    const {data} = await $host.delete(`api/v1/cart/${userId}/${tovarId}`);
    return data;
}
// Дополнительный метод для получения корзины с подсчетом общей суммы
export const getCartWithTotal = async (userId) => {
    const {data} = await $host.get(`api/v1/cart/${userId}/with-total`);
    return data;
}