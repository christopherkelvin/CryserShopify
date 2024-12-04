import { CartEmpty, CartHeader } from "../components/cart";
import { CartItems } from "../components/cartitems";
import { useSelector } from "react-redux";
import { ScrollArea } from "./ui/scroll-area";
import { CartFooter } from "./cartfooter";
export const PaySide = () => {
  const carts = useSelector((store) => store.cart.items);
  return (
    <div className="fixed grid grid-rows-[200px,1fr,100px] right-0 min-h-screen w-[350px] bg-blue-500/50 overflow-hidden">
      <div>
        <CartHeader />
      </div>
      <ScrollArea className="h-[400px] w-[350px] rounded-md border-none ">
        {carts ? (
          carts.map((cart, i) => <CartItems key={i} data={cart} />)
        ) : (
          <CartEmpty />
        )}
      </ScrollArea>
      <div>
        <CartFooter />
      </div>
    </div>
  );
};
