import cartPic from "../assets/images/RightCart.png";
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
