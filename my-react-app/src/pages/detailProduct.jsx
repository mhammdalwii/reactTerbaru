import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row font-sans max-w-screen-md mx-auto p-4 gap-4">
      {Object.keys(product).length > 0 && (
        <>
          <div className="flex-none w-full md:w-48 relative h-64 md:h-auto">
            <img src={product?.image} alt={product?.title} className="absolute inset-0 w-full h-full object-cover rounded-md shadow" loading="lazy" />
          </div>

          <form className="flex-auto p-4">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-lg font-semibold text-slate-900">{product?.title}</h1>
              <div className="text-lg font-semibold text-slate-500">Rp. {product?.price}</div>
              <div className="w-full text-sm font-medium text-green-600 mt-2">
                Review {product?.rating?.rate} / 5 ({product?.rating?.count})
              </div>
            </div>

            <p className="text-sm text-slate-700 mt-2">{product?.description}</p>

            <div className="flex flex-wrap items-center space-x-4 mb-6 text-sm font-medium mt-2">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-gray-800" type="submit">
                  Buy now
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-gray-100" type="button">
                  Add to bag
                </button>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-400 border border-slate-200 hover:text-red-500" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-slate-700">Free shipping on all continental US orders.</p>
          </form>
        </>
      )}
    </div>
  );
};

export default DetailProductPage;
