import {axiosService} from "./axios.service";
import {urls} from "../configs";


export const carService = {
    getCars: () => axiosService.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    createNewCar: (car) => axiosService.post(`${urls.cars}`, car).then(value => value.data)
}