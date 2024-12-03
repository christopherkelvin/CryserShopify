import Veg from "../assets/images/VegLogo.png";
import {  useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { IoMdSearch } from "react-icons/io";
export function ItemsMiddle(data) {
  const product = data.data;
  const dispatch = useDispatch();
  const handleAddToCart = (productId) => {
    dispatch(
      addToCart({
        productId,
        quantity: 1
    }));
  }
  return (
    <div>
      <div className="flex w-full justify-center my-4 relative">
        <input
          type="text"
          className=" w-1/2 h-12 rounded-3xl bg-gradient-to-r from-pink-400 to-pink-500 placeholder:text-black pl-8 pt-1"
          placeholder="Search here..."
        />
        <button className="absolute right-[265px] top-[13px]">
          <IoMdSearch  className=" text-2xl" />
        </button>
      </div>
      <div className=" m-10 mt-0 flex gap-10 overflow-hidden flex-wrap justify-start">
        {product ? (
          product.map((data) => (
            <div key={data.id}>
              <div className=" min-h-72 bg-white max-w-60 overflow-hidden relative rounded-[25px] drop-shadow-[0_80px_30px_#0007]">
                <div className="absolute h-[55px] w-[67px] overflow-hidden p-[3px] top-[120px] left-[85px] bg-white rounded-2xl">
                  <div className=" bg-pink-200 w-full h-full rounded-2xl flex justify-center pt-1/2">
                    <img src={Veg} alt="" className=" h-12" />
                  </div>
                </div>
                <img
                  src={data.image}
                  className="h-36 w-full object-cover object-top"
                  alt=""
                />
                <div className=" mt-10 flex flex-col items-center">
                  <h1 className=" font-bold text-[16px]">{data.name}</h1>
                  <div className=" font-sans font-bold text-black/50">
                    Tsh {data.price.toLocaleString("en-US")}
                  </div>
                  <div className=" mt-1">
                    <div className=" bg-black/40 h-[1px] w-60" />
                    <input
                      type="button"
                      className=" py-2 px-4 bg-gradient-to-r from-pink-400 to-pink-300 m-3 mx-20 text-center rounded-3xl cursor-pointer hover:from-pink-500 hover:to-pink-400"
                      onClick={() => handleAddToCart(data.id)}
                      value="Add to Cart"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>No Items on sale</>
        )}
      </div>
    </div>
  );
}
