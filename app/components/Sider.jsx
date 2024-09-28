import Divider from "../components/divider";
import { SiShopify } from "react-icons/si";
export default function Sider() {
  return (
    <div className="h-screen bg-primary-color border-line-color border-r-2 rounded-r-3xl">
      <div className="py-6 font-serif flex gap-3 justify-center items-center">
        <SiShopify className="text-3xl text-line-color" />
        <h1 className="text-2xl gap-2 flex font-extrabold text-line-color uppercase">
          <div>Cryser</div>
          <div className=" text-amber-950"> Shop</div>
        </h1>
      </div>
      <Divider />
    </div>
  );
}
