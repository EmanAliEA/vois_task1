import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="flex justify-around h-[10vh] items-center sticky top-0 z-10 text-black bg-gray-300 py-5 text-3xl ">
      <CgProfile className="text-4xl text-black" />
      <h1 className="text-sky-800 text-4xl font-bold">Mini Food</h1>
      <NavLink
        to="/cart"
        className="flex items-center gap-2 cursor-pointer border-none focus:outline-none text-black"
      >
        <FaShoppingCart />
        <p>Cart</p>
      </NavLink>
    </nav>
  );
}

export default Nav;
