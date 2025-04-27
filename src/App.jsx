import { useEffect, useState } from "react";
import { getProducts } from "./services/productsApi";
import Products from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./pages/AppLayout";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import CheckOut from "./pages/CheckOut";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const data = await getProducts();
      setData(data);
    }
    fetchApi();
  }, []);

  console.log(data);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
  );
}

export default App;
