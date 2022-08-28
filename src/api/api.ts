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
        return instance.delete(`follow/${id}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
  
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/` + id)
    },
    getState(id: number) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}