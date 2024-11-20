import cartDiagram from "../assets/images/Cart.png"
import cartPic from "../assets/images/RightCart.png"
export const PaySide = () => {
    return (
      <div className="fixed right-0 min-h-screen w-[330px] bg-blue-500/50 overflow-hidden">
        <div className="relative">
          <div className="absolute bg-white h-72 w-72 rounded-full blur-2xl -top-10 -right-28" />
          <div className="absolute bg-white h-[200px] w-[200px] rounded-full blur-xl -left-14 top-[580px]" />
        </div>
        <div className="mt-14 ml-5">
          <h1 className=" text-gray-800 font-poppins font-bold text-2xl">
            Shopping
          </h1>
          <h1 className=" text-gray-800 font-poppins font-bold text-2xl">
            Cart
          </h1>
          <img
            src={cartDiagram}
            className="absolute top-0 h-36 right-0 -rotate-12"
            alt=""
          />
        </div>
        <div className=" mt-32 ml-8">
          <img src={cartPic} className=" h-56" alt="" />
          <div className="text-center pr-10 text-gray-800">Your cart is empty</div>
        </div>
      </div>
    );
}