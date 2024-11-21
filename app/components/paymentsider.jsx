import { CartEmpty, CartHeader ,CartItems} from "../components/cart";
export const PaySide = () => {
  return (
    <div className="fixed right-0 min-h-screen w-[350px] bg-blue-500/50 overflow-hidden">
      <CartHeader />
      {/* <CartEmpty /> */}
      <CartItems />
    </div>
  );
};
