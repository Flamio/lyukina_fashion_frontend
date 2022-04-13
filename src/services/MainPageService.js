import {Urls} from "../constants";

export const MainPageService = {
  getAll,
  getMore
};

function getAll() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(Urls.MAIN_PAGE_SERVICE_URL + "?productsPage=0", requestOptions).then(handleResponse);
}

function getMore() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(Urls.MAIN_PAGE_SERVICE_URL + "/more", requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}