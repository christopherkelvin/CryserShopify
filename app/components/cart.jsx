import cartDiagram from "../assets/images/Cart.png";
import cartPic from "../assets/images/RightCart.png";
import { RiFilter2Line } from "react-icons/ri";
export function CartEmpty() {
  return (
    <>
      <div className=" mt-32 ml-8">
        <img src={cartPic} className=" h-56" alt="" />
        <div className="text-center pr-10 text-gray-700">
          Your cart is empty
        </div>
      </div>
    </>
  );
}

export function CartHeader() {
  return (
    <>
      <div className="relative">
        <div className="absolute bg-white h-72 w-72 rounded-full blur-2xl -top-28 -right-28" />
        <div className="absolute bg-white z-0 h-[200px] w-[200px] rounded-full blur-xl -left-14 top-[580px]" />
      </div>
      <div className="mt-14 ml-5">
        <h1 className=" text-gray-800 font-poppins font-bold text-2xl">
          Shopping
        </h1>
        <h1 className=" text-gray-800 font-poppins font-bold text-2xl">Cart</h1>
        <img
          src={cartDiagram}
          className="absolute top-0 h-36 right-0 -rotate-12"
          alt=""
        />
      </div>
      <div className="mt-12 mx-5 flex">
        <div className="px-4 py-1 text-white text-sm flex items-center gap-2 rounded-md bg-blue-600">
          All Items
          <RiFilter2Line />
        </div>
      </div>
    </>
  );
}

export function CartTotal() {
  return (
    <>
      <div></div>
    </>
  );
}
