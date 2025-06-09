import axios from "axios";

export const getProducts = (calback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      calback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = async (id, callback) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    callback(response.data);
  } catch (error) {
    console.error(error);
    callback(null);
  }
};
