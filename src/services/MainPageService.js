import { Urls } from "../constants";
import { helpers } from "./helpers";

export const MainPageService = {
  getAll
};

function getAll(page) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    Urls.MAIN_PAGE_SERVICE_URL + "?productsPage="+page,
    requestOptions
  ).then(helpers.handleResponse);
}
