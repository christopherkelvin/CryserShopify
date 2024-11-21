import cartDiagram from "../assets/images/Cart.png";
import cartPic from "../assets/images/RightCart.png";
import cartImage from "../assets/images/ShopItem.jpeg"
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
        <div className="absolute bg-white h-[200px] w-[200px] rounded-full blur-xl -left-14 top-[580px]" />
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
    </>
  );
}
export function CartItems() {
  return (
    <>
      <div className="mt-12 mx-5 flex">
        <div className="px-4 py-1 text-white text-sm flex items-center gap-2 rounded-md bg-blue-600">
          All Items
          <RiFilter2Line />
        </div>
      </div>
      <div className="">
        <div className=" h-24 relative bg-white m-3 flex overflow-hidden items-center rounded-xl ">
          <img src={cartImage} className="h-24 w-28 object-cover" alt="" />
          <div className="ml-2">
            <h1 className=" font-bold">Green Vegetables</h1>
            <div className="text-xs text-gray-500 w-36 line-clamp-2">
              Contains 1 cabbage and 3 carrots
            </div>
            <div className="font-poppins font-bold mt-2">Tsh 5000/=</div>
          </div>
          <div className=" absolute right-4 drop-shadow-[0_80px_30px_#0007]">
            <div className="py-[2px] cursor-pointer hover:bg-blue-800 text-white px-[6px] text-center rounded-t-lg bg-blue-600">
              +
            </div>
            <div className=" text-center">1</div>
            <div className="py-[2px] px-[6px] text-center cursor-pointer hover:bg-blue-800 text-white rounded-b-lg bg-blue-600">
              -
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function CartTotal() {
    return <>
        <div>
            
        </div>
    </>
}
