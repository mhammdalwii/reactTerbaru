import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center ">
      <CardProduct>
        <CardProduct.Header image="https://placehold.co/600x400/png" />
        <CardProduct.Body title="Product Name">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="https://placehold.co/600x400/png" />
        <CardProduct.Body title="Product Name">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur eos in cupiditate laborum repellat maxime labore tempore blanditiis explicabo doloremque soluta et eius, eaque qui iusto cumque porro animi?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
