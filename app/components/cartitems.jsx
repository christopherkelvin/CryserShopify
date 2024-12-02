// import { useSelector } from "react-redux";
// import cartImage from "../assets/images/ShopItem.jpeg";
import { useState, useEffect } from "react";
import { Product } from "../utils/product";
export function CartItems(data) {
    const [details, setDetails] = useState([]);
    const { productId, quantity } = data.data;
    useEffect(() => {
      const findDetails = Product.filter(
        (product) => product.id === productId
      )[0];
      setDetails(findDetails);
    }, [productId]);
    return (
      <>
        {details ? (
          <>
            <div className="">
              <div className=" h-24 relative bg-white m-3 flex overflow-hidden items-center rounded-xl ">
                <img
                  src={details.image}
                  className="h-24 w-28 object-cover"
                  alt=""
                />
                <div className="ml-2">
                  <h1 className=" font-bold">{details.name}</h1>
                  <div className="text-xs text-gray-500 w-36 line-clamp-2">
                    {details.description}
                  </div>
                  <div className="font-poppins font-bold mt-2">
                    {details.price}
                  </div>
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
            </div>
          </>
        ) : (
          <div className="fixed text-3xl">nothing</div>
        )}
      </>
    );
}
