import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.qty : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  // const cartRef = useRef([JSON.parse(localStorage.getItem("cart")) || []]);

  // const handleAddToCartRef = () => {
  //   cartRef.current = [
  //     ...cartRef.current,
  //     {
  //       id: 1,
  //       qty: 1,
  //     },
  //   ];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 items-center px-10 text-white">
        {username}
        <Button
          classname="bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-black font-medium rounded-lg text-sm px-5 py-2.5 ml-3"
          onClick={handleLogout}
        >
          Logout !
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="min-w-full divide-y divide-gray-200 mt-5 text-left table-auto border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item, index) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={index}>
                      <td>{product.title}</td>
                      <td>$ {product.price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                      <td>{item.qty}</td>
                      <td>$ {(product.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                    </tr>
                  );
                })}
              {products.length > 0 && cart.length > 0 && (
                <tr>
                  <td colSpan={3}>Total Price</td>
                  <td>
                    {Number(totalPrice).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
