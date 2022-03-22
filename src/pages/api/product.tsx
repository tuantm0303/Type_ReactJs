import axios from "./instance";

export const getAll = () => axios.get('/products')

export const get = (_id: string | number) => axios.get(`/product/${_id}`)