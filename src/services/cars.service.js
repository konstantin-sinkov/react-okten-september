import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carsService = {
    getCars: () => axiosService.get(urls.cars).then(value => value.data),
    createCar: (car) => axiosService.post(urls.cars, car).then(value => value.data), /*.get(urls.cars, car) - we need to send car obj. as a 2nd param  */
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateCarById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deletCarById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}