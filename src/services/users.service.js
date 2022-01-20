import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const usersService = {
    getUsers: () => axiosService.get(urls.users).then(value => value.data),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPostsById: (id) => axiosService.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(value => value.data)
}

// https://jsonplaceholder.typicode.com/posts?userId=1'

// https://jsonplaceholder.typicode.com/posts?userId=
    
    // `${urls.posts}?userId=${id}`