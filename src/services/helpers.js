export const helpers = {
    handleResponse
}

function handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        console.log(response.statusText)
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }