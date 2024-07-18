import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShoppingCart = () => (
  <Link>
    <AiOutlineShoppingCart className="h-8 w-8 ml-3 hidden sm:flex" />
  </Link>
);

export default ShoppingCart;
