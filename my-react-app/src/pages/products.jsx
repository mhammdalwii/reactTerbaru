import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";

const products = [
  {
    id: 1,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: "$599",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: "$599",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?",
    price: "$599",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
      <div className="flex justify-center items-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
