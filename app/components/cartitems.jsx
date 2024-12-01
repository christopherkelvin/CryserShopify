import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import cartImage from "../assets/images/ShopItem.jpeg";
import { Product } from "../utils/product";
export function CartItems(data) {
    const {productId,quantity} = data.data;
    
  return (
    <>
      <div className="">
        {/* {carts.map((cart, i) => {
          return (
            <> */}
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
            <input
              type="button"
              className="py-[2px] cursor-pointer hover:bg-blue-800 text-white px-[6px] text-center rounded-t-lg bg-blue-600"
              // onClick={handleAddQuantity}
              value="+"
            />

            <div className=" text-center">{quantity}</div>
            <input
              type="button"
              className="py-[2px] px-[6px] text-center cursor-pointer hover:bg-blue-800 text-white rounded-b-lg bg-blue-600 "
              // onClick={handleMinusQuantity}
              value="-"
            />
          </div>
        </div>
        {/* </>
          );
        })} */}
      </div>
    </>
  );
}
