import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../Context/DarkMode";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

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

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (totalPriceRef.current) {
      if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }
  }, [cart]);

  return (
    <table className={`min-w-full divide-y divide-gray-200 mt-5 text-left table-auto border-spacing-x-5 ${isDarkMode ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
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
  );
};

export default TableCart;
