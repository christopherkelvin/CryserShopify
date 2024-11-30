import Veg from "../assets/images/VegLogo.png";
export function ItemsMiddle(data) {
  const product = data.data;
  return (
    <div className=" m-12 flex gap-10 overflow-hidden flex-wrap justify-start">
      {product ? (
        product.map((data) => (
          <div key={data.id}>
            <div className=" min-h-72 bg-white max-w-60 overflow-hidden relative rounded-[25px] drop-shadow-[0_80px_30px_#0007]">
              <div className="absolute h-[55px] w-[67px] overflow-hidden p-[3px] top-[120px] left-[85px] bg-white rounded-2xl">
                <div className=" bg-pink-200 w-full h-full rounded-2xl flex justify-center pt-1/2">
                  <img src={Veg} alt="" className=" h-12" />
                </div>
              </div>
              <img src={data.image} className="h-36 w-full" alt="" />
              <div className=" mt-10 flex flex-col items-center">
                <h1 className=" font-bold text-[16px]">{data.name}</h1>
                <div className=" font-sans font-bold text-black/50">
                  {data.price.toLocaleString("en-US")}
                </div>
                <div className=" mt-1">
                  <div className=" bg-black/40 h-[1px] w-60" />
                  <div className=" p-2 bg-gradient-to-r from-pink-400 to-pink-300 m-3 mx-10 text-center rounded-3xl cursor-pointer hover:from-pink-500 hover:to-pink-400">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>No Items on sale</>
      )}
    </div>
  );
}
