import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";

const products = [
  {
    id: 1,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: 1000000,
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: 2000000,
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: 3000000,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.qty : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
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
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 items-center px-10 text-white">
        {email}
        <Button
          classname="bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-black font-medium rounded-lg text-sm px-5 py-2.5 ml-3"
          onClick={handleLogout}
        >
          Logout !
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
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
              {cart.map((item, index) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(product.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>Total Price</td>
                <td>
                  Rp{" "}
                  {Number(totalPrice).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
