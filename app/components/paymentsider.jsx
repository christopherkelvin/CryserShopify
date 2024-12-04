import { CartEmpty, CartHeader } from "../components/cart";
import { CartItems } from "../components/cartitems";
import { useSelector } from "react-redux";
import {CartFooter} from "./cartfooter"
export const PaySide = () => {
  const carts = useSelector((store) => store.cart.items);
  return (
    <div className="fixed grid grid-rows-[200px,1fr,100px] right-0 min-h-screen w-[350px] bg-blue-500/50 overflow-hidden">
      <div>
        <CartHeader />
      </div>
      <div>
        {carts ? (
          carts.map((cart, i) => <CartItems key={i} data={cart} />)
        ) : (
          <CartEmpty />
        )}
      </div>
      <div>
        <CartFooter />
      </div>
    </div>
  );
};
