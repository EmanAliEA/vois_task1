import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import useFetchData from "../hooks/useFetchData";

function Products() {
  const [data, isLoading] = useFetchData();
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col bg-gray-800 ">
      <ul className="gap-4 flex-wrap flex px-7 py-10 justify-center">
        {!isLoading &&
          data.map((product) => (
            <ProductItem product={product} key={product.name} />
          ))}
      </ul>
    </div>
  );
}

export default Products;
