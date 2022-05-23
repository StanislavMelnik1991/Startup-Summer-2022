import * as axios from "axios";

const instance = axios.default.create({
    baseURL: '  https://api.github.com/',
   
})

export const getUserAPI = (userName: string) => {
    return instance.get(`users/${userName}`)
}

export const getUserReposAPI = (userName: string) => {
    return instance.get(`users/${userName}/repos`)
}