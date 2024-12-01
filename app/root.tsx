import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { Sider } from "~/components/sider";
import { PaySide } from "~/components/paymentsider";
import { Provider } from "react-redux";
import {store} from "./stores"

export const meta: MetaFunction = () => {
  return [
    { title: "Cryser Shopify App" },
    { name: "description", content: "Welcome to Cryser Shop" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Provider store={store}>
        {" "}
        <body className={`font-merriweather min-h-screen bg-pink-300/50`}>
          <div className="grid grid-cols-[250px,1fr,300px]">
            <Sider />
            <div />
            <main>{children}</main>
            <div></div>
            <PaySide />
          </div>
          <ScrollRestoration />
          <Scripts />
        </body>
      </Provider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
