import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Button from "./Button";
import { useCart } from "../context/CartContext";

function CartItem({ cartItem }) {
  const { dispatch } = useCart();
  const styleButton =
    "!p-2 !py-0 !rounded-full !border-none !bg-transparent !text-sky-600 !hover:text-sky-800 !font-bold";

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
    <li className="flex w-[45%] gap-5 items-center max-h-[8rem] pe-2 bg-gray-300 rounded-lg shadow shadow-gray-900">
      <img
        src={cartItem.image}
        alt={cartItem.name}
        className="w-1/2 rounded-tl-lg rounded-bl-lg h-full object-cover"
      />
      <div className="pe-2 gap-1 flex flex-col">
        <h3 className="text-xl font-semibold  text-sky-800">{cartItem.name}</h3>
        <p>{cartItem.description}</p>
        <p>Price: ${cartItem.price}</p>
        <div className="flex gap-15 items-center justify-between ">
          <div className="flex items-center gap-2">
            <Button style={styleButton} onClick={handleDecreaseQuantity}>
              <FaMinus />
            </Button>
            <p className="text-xl">{cartItem.quantity}</p>
            <Button style={styleButton} onClick={handleIncreaseQuantity}>
              <FaPlus />
            </Button>
          </div>
          <Button
            style="!border-none !p-0 !border-none !bg-transparent "
            onClick={handleRemoveItem}
          >
            <FaTrash className="text-red-500" />
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
