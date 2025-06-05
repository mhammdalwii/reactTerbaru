import axios from "axios";

export const getProducts = (calback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      calback(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
