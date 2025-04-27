import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { useNavigate } from "react-router";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  function handleCheckout() {
    navigate("/checkout");
  }
  // console.log(cart);
  return (
    <div className=" flex gap-10 flex-col justify-center items-center py-10">
      <ul className="px-2 flex flex-wrap justify-center gap-3 w-4/5">
        {cart.items.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </ul>
      <div className="text-2xl bg-gray-200 flex flex-col justify-center items-center gap-3 px-30 py-8 rounded-lg shadow shadow-gray-00">
        <p>Total: {cart.total}$</p>
        <Button style="!py-1 !px-8" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
