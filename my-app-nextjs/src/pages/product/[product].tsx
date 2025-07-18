import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = () => {
  const { query } = useRouter();
  const { data, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <>
      <div>
        <h1>Detail Product Page</h1>
        <p>Product : {query.product}</p>
      </div>
    </>
  );
};

export default DetailProductPage;
