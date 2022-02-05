import axios from 'axios';
export class ProductService {
    getProducts() {
        return fetch('../shared/cars.json').then(res => res.data.data);
    }
}