import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export function CartFooter() {
  const [total, setTotal] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    if (carts) {
      const total = carts.reduce(
        (acc, cart) => acc + cart.quantity * cart.productPrice,
        0
      );
      setTotal(total);
    }
  },[carts])
    return (
      <div className="fixed ml-4">
        <div className=" bg-black h-[1.5px] w-[320px]" />
        <div className="flex justify-between w-[320px]">
          <div className="mt-1 font-serif">Subtotal</div>
          <div className=" font-mono font-bold text-lg">
            Tsh {total.toLocaleString("en-US")} /=
          </div>
        </div>
        <button className=" py-1.5 px-8 rounded-lg text-white font-sans float-right bg-blue-600/90 mt-6 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    );
}