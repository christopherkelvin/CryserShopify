export function CartFooter() {
    return (
      <div className="fixed ml-4">
        <div className=" bg-black h-[1.5px] w-[320px]" />
        <div className="flex justify-between w-[320px]">
          <div className="mt-1 font-serif">Subtotal</div>
          <div className=" font-mono font-bold text-lg">Tsh 5,000 /=</div>
            </div>
            <button className=" py-1.5 px-8 rounded-lg text-white font-sans float-right bg-blue-600/90 mt-6 hover:bg-blue-700">Checkout</button>
      </div>
    );
}