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
import { useState, useEffect } from "react";

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
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentMode = window.localStorage.getItem("mode");
      if (currentMode) {
        setMode(currentMode);
      }
    }
  }, []);

  // Sync mode changes with localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mode", mode);
      setMode(mode);
      console.log(mode);
    }
  }, [mode]);

  return (
    <html lang="en" className={mode === "dark" ? "dark" : "light"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={`font-merriweather min-h-screen bg-gray-200 ${
          mode === "dark" ? "dark" : "light"
        }`}
      >
        <div className="grid grid-cols-[300px,1fr]">
          <Sider />
          <div></div>
          <main>{children}</main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
