import axios from 'axios';
export const fetch = async (category) => {
  try {
    const url = `https://dummyjson.com/products/${category}?limit=100`;
    console.log(url);
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    console.error('Error:', error);
  }
};
// export fetch;
