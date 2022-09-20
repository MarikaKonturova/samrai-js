import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "9d1ca1cb-6ac9-4be1-a4e3-04ad5e6ccadb",
  },
});
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`);
  },
  follow(id: number) {
    return instance.post(`follow/${id}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`profile/` + id);
  },
  getStatus(id: number) {
    return instance.get(`profile/status/` + id);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status });
  },
  savePhoto(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile: any) {
    return instance.put(`profile/`, profile);
  },
};
