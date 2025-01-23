import CartContext from "@/contexts/cartContext";
import { useContext } from "react";

const useCart = () => useContext(CartContext);
export default useCart;
