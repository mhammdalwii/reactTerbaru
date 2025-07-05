import ProductView from "../../views/product";
import { productType } from "./product.type";

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return <ProductView products={products} />;
};

export default ProductPage;

export async function getServerSideProps() {
  // fetch data

  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
