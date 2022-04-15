import {Urls} from "../constants";
import { helpers } from "./helpers";

export const ProductService = {
  get
};

function get(id) {
    const requestOptions = {
      method: 'GET',
    };
  
    return fetch(Urls.PRODUCT_SERVICE_URL + "/"+id, requestOptions).then(helpers.handleResponse)
}