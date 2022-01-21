import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const usersService = {
    getUsers: () => axiosService.get(urls.users).then(value => value.data),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPostsById: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}