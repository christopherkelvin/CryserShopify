import { TopNav } from "~/components/topnav";
import { PaySide } from "~/components/paymentsider";
import {ItemsMiddle} from "~/components/itemsmiddle"
export default function Index() {
  return (
    <>
      <TopNav name="Dashboard" />
      <div className="grid grid-cols-[1fr,300px]">
        <div className="dark:bg-slate-700 min-h-screen">
          <ItemsMiddle/>
        </div>
        <PaySide />
      </div>
    </>
  );
}