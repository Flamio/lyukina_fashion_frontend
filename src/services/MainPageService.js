import { Urls } from "../constants";
import { helpers } from "./helpers";

export const MainPageService = {
  getAll
};

function getAll(page, category) {
  const requestOptions = {
    method: "GET",
  };

  const baseUrl = Urls.MAIN_PAGE_SERVICE_URL + "?productsPage="+page;

  const url = category ? baseUrl+"&categoryId="+category : baseUrl

  console.log(url)

  return fetch(
    url,
    requestOptions
  ).then(helpers.handleResponse);
}
