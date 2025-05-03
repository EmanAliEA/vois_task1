import Products from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./pages/AppLayout";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import CheckOut from "./pages/CheckOut";
import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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

function App() {
  return (
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
  );
}

export default App;
