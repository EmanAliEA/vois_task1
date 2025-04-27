import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";

function ProductItem({ product }) {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const { dispatch, cart } = useCart();

  useEffect(() => {
    const isInCart = cart.items.find((item) => item.id === product.id);
    setIsAddToCart(isInCart ? true : false);
  }, [cart.items, product.id]);

  function handleAddToCart() {
    dispatch({
      type: isAddToCart ? "removeFromCart" : "addToCart",
      payload: product,
    });
    setIsAddToCart((prev) => !prev);
  }
  return (
    <li className="max-w-[19.5%] max-h-60 hover:translate-0.5  transition-transform flex flex-col bg-gray-300  text-black justify-between rounded-2xl pb-3">
      <img
        src={product?.image}
        alt={product?.name}
        className=" rounded-tl-2xl rounded-tr-2xl max-h-1/2"
      />
      <div className="p-4 flex justify-between ">
        <div className="flex flex-col gap-2 text-xl">
          <h2 className="text-sky-800 font-semibold">{product?.name}</h2>
          <p className="text-xl">{product?.price}$</p>
        </div>
        <Button
          style="self-end !text-2xl !p-2 !rounded-full !text-white"
          onClick={handleAddToCart}
        >
          {isAddToCart ? <BsFillCartCheckFill /> : <FaCartPlus />}
        </Button>
      </div>
    </li>
  );
}
export default ProductItem;
