import axios from "./instance";

export const getAll = () => axios.get('/products')

export const get = () => axios.get('/product/:id')