import {CartEmpty} from "../components/cartempty";
import { CartHeader } from "../components/cartheader";
export const PaySide = () => {
  return (
    <div className="fixed right-0 min-h-screen w-[330px] bg-blue-500/50 overflow-hidden">
      <CartHeader />
      <CartEmpty />
    </div>
  );
};
