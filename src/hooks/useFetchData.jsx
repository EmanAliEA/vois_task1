import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";

function useFetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchApi() {
      setIsLoading(true);
      const data = await getProducts();
      if (!data) setError("Failed to fetch data");
      setData(data);
      setIsLoading(false);
    }
    fetchApi();
  }, []);
  return [data, isLoading, error];
}

export default useFetchData;
