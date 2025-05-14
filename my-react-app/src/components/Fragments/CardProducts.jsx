import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 mx-2">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      {" "}
      <h1 className="font-bold mb-2">Product Page</h1>
      <a href="#">
        <img src={image} alt="Product" className="w-full h-auto rounded-lg mb-4" />
      </a>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
        <p className="text-sm *:text-gray-700 mb-2">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-gray-900">{price}</span>
      <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        <Button classname="text-sm">add To Card</Button>
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
