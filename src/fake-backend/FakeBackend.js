import products from './stub/products.json'

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/products') && method === 'GET':
            console.log("fetch")
            return getProducts();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
            .then(response => resolve(response))
            .catch(error => reject(error));
        }
      }

      // route functions

      function getProducts() {
        return ok(products);
      }

      // helper functions

      function ok(body) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
      }

      function unauthorized() {
        resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
      }

      function error(message) {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
      }

      function isLoggedIn() {
        return headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
      }
    });
  }
}