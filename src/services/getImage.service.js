import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const getImageService = {
    getCat: () => axiosService.get(urls.cat).then(value => value.data),
    getCar: () => axiosService.get(urls.car).then(value => value.data),
    getDog: () => axiosService.get(urls.dog).then(value => value.data),
    getGirl: () => axiosService.get(urls.girl).then(value => value.data),
    getNote: () => axiosService.get(urls.notebook).then(value => value.data),
}