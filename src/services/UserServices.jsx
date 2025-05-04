import axios from 'axios'


const REST_API_BASE_URL  = import.meta.env.VITE_APP_API_URL;

export const welcomeString = () => {
    return axios.get(REST_API_BASE_URL);
}

export const listOfUsers = () => {
    return axios.get(`${REST_API_BASE_URL}/allusers`);
}

export const createUser = (user) => {
    return axios.post(`${REST_API_BASE_URL}/createUser`, user);
}

export const deleteUser = (id) => {
    return axios.delete(`${REST_API_BASE_URL}/deleteUser/${id}`);
}

export const updateUserbyId = (id, updatedUser)=> {
    return axios.put(`${REST_API_BASE_URL}/updateUser/${id}`, updatedUser);
}