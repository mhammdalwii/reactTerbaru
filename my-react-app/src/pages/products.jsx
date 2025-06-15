import { Fragment, useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../Context/DarkMode";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

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
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product?.id} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product?.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
