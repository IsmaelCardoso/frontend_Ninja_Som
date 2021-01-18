import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos',
});

export default api;
