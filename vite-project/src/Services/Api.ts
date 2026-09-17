import axios from "axios"

const getProducts = (page: number) => {
  return axios.get('https://punkapi-alxiw.amvera.io/v3/beers', { params: { page, query: 'a' } })
    .then((response) => response.data)
    .catch((e) => console.log('error', e.response.data))
}

export default {
  getProducts,
};
