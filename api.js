import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'content-type': 'application/json',
  },
});

export default {
  getData: () =>
    instance({
      method: 'GET',
      url: '/query',
      params: {
        search: 'parameter',
      },
    }),
  postData: () =>
    instance({
      method: 'POST',
      url: '/api',
      data: {
        item1: 'data1',
        item2: 'item2',
      },
    }),

  getSubscriptionPlans: () =>
    instance({
      method: 'GET',
      url: '/api/subscription',
    }),
};
