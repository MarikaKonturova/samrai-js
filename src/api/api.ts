import axios from 'axios';

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': ''
        }
    }
)
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(
            `users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(
            `follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(
            `follow/${id}`)
            .then(response => response.data)
    },
}