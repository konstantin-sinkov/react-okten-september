import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const postsService = {
    getPosts: () => axiosService.get(urls.posts).then(value => value.data),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}

// 'https://jsonplaceholder.typicode.com/posts/1/comments'