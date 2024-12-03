import { CartEmpty, CartHeader } from "../components/cart";
import { CartItems } from "../components/cartitems";
import { useSelector } from "react-redux";
export const PaySide = () => {
  const carts = useSelector((store) => store.cart.items);
  return (
    <div className="fixed right-0 min-h-screen w-[350px] bg-blue-500/50 overflow-hidden">
      <CartHeader />
      <div>
        {carts ? (
          carts.map((cart, i) => <CartItems key={i} data={cart} />)
        ) : (
          <CartEmpty />
        )}
      </div>
      
    </div>
  );
};
