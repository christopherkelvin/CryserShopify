import { NavLink } from "@remix-run/react";
import logo from "../assets/images/logo.png";
import { NavList } from "../utils/navlist";
export function Sider() {
  return (
    <>
      <div className=" bg-white/20 min-h-screen rounded-2xl overflow-hidden">
        <div className="bg-white w-full flex py-2 items-center gap-5">
          <img src={logo} alt="" className=" h-12 w-auto" />
          <div className="text-3xl uppercase font-serif">Cryser Shop</div>
        </div>
        <div className=" mt-10 bg-white/40  rounded-xl flex flex-col pb-6">
          <h1 className="text-sm text-black/40 font-extrabold p-4">Menu</h1>
          {NavList.map((nav, i) => {
            const Icon = nav.icon;
            return (
              <NavLink
                key={i}
                to={nav.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-white  font-bold px-6 py-3 bg-black/50 flex items-center gap-3"
                    : "text-gray-900  font-bold px-6 py-3 flex items-center gap-3"
                }
              >
                <Icon size={24} />
                {nav.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
