import HttpClient from './http-client';

class APIMethods {
  get(resource, params = {}) {
    return HttpClient.get(resource, { params });
  }

  create(resource, { data, ...params } = {}) {
    return HttpClient.post(resource, data, { params });
  }

  update(resource, { data, ...params }) {
    return HttpClient.put(resource, data, { params });
  }

  delete(resource, params) {
    return HttpClient.delete(resource, { params });
  }

  getCities(resource, params = {}) {
    return HttpClient({url: resource, baseURL: process.env.REACT_APP_CITY_API_URL,  params, method: 'get'});
  }

  getCurrency(resource, params = {}) {
    return HttpClient({url:"", baseURL: process.env.REACT_APP_CURRENCY_API_URL,  params, method: 'get'});
  }
}

export default new APIMethods();
