// import { TopNav } from "~/components/topnav";
import { ItemsMiddle } from "~/components/itemsmiddle";
import { json, useLoaderData } from "@remix-run/react";
import { Product } from "../utils/product";
export const loader = async () => {
  return json(Product);
}
export default function Index() {
  const product = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-[1fr]">
        <div className="dark:bg-slate-700 min-h-screen">
          <ItemsMiddle data={product} />
        </div>
      </div>
    </>
  );
}
