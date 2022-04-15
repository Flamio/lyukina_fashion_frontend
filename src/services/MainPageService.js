import { Urls } from "../constants";
import { helpers } from "./helpers";

export const MainPageService = {
  getAll,
  getMore,
};

function getAll() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    Urls.MAIN_PAGE_SERVICE_URL + "?productsPage=0",
    requestOptions
  ).then(helpers.handleResponse);
}

function getMore() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(Urls.MAIN_PAGE_SERVICE_URL + "/more", requestOptions).then(
    helpers.handleResponse
  );
}
