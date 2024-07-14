import axios from 'axios';

const API_URL = 'https://backend-e-commerce-production.up.railway.app/api/v1';

export const registerUser = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/users/login`, userData);
export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const updateProduct = (id, productData) => axios.put(`${API_URL}/products/${id}`, productData);
export const addProduct = (productData) => axios.post(`${API_URL}/products`, productData);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);
