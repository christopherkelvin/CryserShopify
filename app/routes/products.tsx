import { json, useLoaderData } from "@remix-run/react"
import { ItemsMiddle } from "~/components/itemsmiddle";

import {Product} from "../utils/product"
export const loader = async () => {
    return json(Product)
}
export default function Products() {
    const data = useLoaderData();
    return <ItemsMiddle data={ data} />;
}