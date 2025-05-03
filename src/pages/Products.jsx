import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import useFetchData from "../hooks/useFetchData";
import ErrorPage from "./ErrorPage";

function Products() {
  const [data, isLoading, error] = useFetchData();
  console.log(data, isLoading);
  return (
    <div className="flex flex-col bg-gray-800 ">
      <ul className="gap-3 lg:gap-4 flex-wrap flex px-7 py-10 justify-center">
        {isLoading && <Loader />}
        {error && <ErrorPage />}
        {!isLoading &&
          data?.map((product) => (
            <ProductItem product={product} key={product.name} />
          ))}
      </ul>
    </div>
  );
}

export default Products;
