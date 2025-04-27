import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";

function useFetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      setIsLoading(true);
      const data = await getProducts();
      setData(data);
      setIsLoading(false);
    }
    fetchApi();
  }, []);
  return [data, isLoading];
}

export default useFetchData;
