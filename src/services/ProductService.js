import { Urls } from "../constants";
import { helpers } from "./helpers";

export const ProductService = {
  getByIds,
  getByPageName,
  getSizes,
  getSizeByIds,
};

function getByPageName(pageName) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    Urls.PRODUCT_SERVICE_URL + "/by-page-name/" + pageName,
    requestOptions
  ).then(helpers.handleResponse);
}

function getByIds(ids) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    Urls.PRODUCT_SERVICE_URL + "/list/" + ids.map((id) => id + ","),
    requestOptions
  ).then(helpers.handleResponse);
}

function getSizes(productId) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(
    Urls.PRODUCT_SERVICE_URL + "/" + productId + "/sizes",
    requestOptions
  ).then(helpers.handleResponse);
}

function getSizeByIds(ids) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(
    Urls.SIZE_SERVICE_URL + "/list/" + ids.map((id) => id + ","),
    requestOptions
  ).then(helpers.handleResponse);
}
