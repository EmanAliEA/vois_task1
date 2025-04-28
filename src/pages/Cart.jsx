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
      <ul className="px-2 flex flex-wrap justify-center sm:gap-2 md:gap-3 w-11/12">
        {cart.items.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </ul>
      <div className="text-xl total md:text-2xl bg-gray-200 flex flex-col  flex-wrap justify-center items-center gap-3 px-20 py-4 md:px-30 md:py-8 rounded-lg shadow shadow-gray-00">
        <p>Total: {cart.total}$</p>
        <Button
          style=" !px-4 !text-[1rem] !py-1 !md:px-8"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
