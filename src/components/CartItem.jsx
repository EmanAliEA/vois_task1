import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Button from "./Button";
import { useCart } from "../context/CartContext";

function CartItem({ cartItem }) {
  const { dispatch } = useCart();
  const styleButton =
    "!p-2 !py-0 !rounded-full !text-[.9rem] !border-none !bg-transparent !text-sky-600 !hover:text-sky-800 !font-bold";

  function handleIncreaseQuantity() {
    console.log(cartItem.id);
    dispatch({
      type: "increaseQuantity",
      payload: cartItem,
    });
  }
  function handleDecreaseQuantity() {
    cartItem.quantity > 1 &&
      dispatch({
        type: "decreaseQuantity",
        payload: cartItem,
      });
  }
  function handleRemoveItem() {
    dispatch({ type: "removeFromCart", payload: cartItem });
  }
  return (
    <li className="flex w-full sm:w-[48%] md:w-[45%] lg:w-1/2 gap-2 md:gap-5 items-center max-h-[8rem] pe-2  bg-gray-300 rounded-lg shadow shadow-gray-900">
      <img
        src={cartItem.image}
        alt={cartItem.name}
        className="w-1/2 rounded-tl-lg rounded-bl-lg h-full object-cover"
      />
      <div className="pe-2  gap-0 md:gap-0.5 flex flex-col">
        <h3 className="text-[1rem]  md:text-[1.2rem] lg:text-xl font-semibold  text-sky-800">
          {cartItem.name}
        </h3>
        <p>{cartItem.description}</p>
        <p>Price: ${cartItem.price}</p>
        <div className="flex gap-2 sm:gap-2 md:gap-4 lg:gap-15 items-center justify-between ">
          <div className="flex items-center gap-1 md:gap-2">
            <Button style={styleButton} onClick={handleDecreaseQuantity}>
              <FaMinus />
            </Button>
            <p className=" sm:text-[.8rem] md:text-xl">{cartItem.quantity}</p>
            <Button style={styleButton} onClick={handleIncreaseQuantity}>
              <FaPlus />
            </Button>
          </div>
          <Button
            style="!text-[.9rem]  !border-none !p-0 !border-none !bg-transparent"
            onClick={handleRemoveItem}
          >
            <FaTrash className="md:text-[1rem] text-red-500" />
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
