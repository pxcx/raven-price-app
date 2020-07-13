import axios from 'axios';

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com",
  headers: {
    'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKETCAP_API_KEY,
    'Accept': 'application/json'
  }
});

export default api;