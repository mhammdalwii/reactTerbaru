import { Fragment } from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-3 flex flex-col justify-between my-2">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="px-5 pt-5">
      <a href="#">
        <img className="p-4 rounded-t-lg w-full object-cover" src={image} alt="product image" />
      </a>
    </div>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-gray-900 dark:text-white">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <Button
        classname="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={() => handleAddToCart(id)}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
