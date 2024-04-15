import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const APIKEY = '8561427-28425017e1b4cf528f7525243';

export const fetchimages = async (q, page) => {
  axios.defaults.params = {
    key: APIKEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page: page,
    order: 'latest',
  };
  const responce = await axios.get();
  return responce.data;
};
