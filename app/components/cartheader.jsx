import cartDiagram from "../assets/images/Cart.png";
export function CartHeader() {
  return (
    <>
      <div className="relative">
        <div className="absolute bg-white h-72 w-72 rounded-full blur-2xl -top-10 -right-28" />
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
