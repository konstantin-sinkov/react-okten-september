import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const usersService = {
    getPosts: () => axiosService.get(urls.posts).then(value => value.data),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data)
}