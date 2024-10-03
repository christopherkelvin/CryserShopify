import { NavLink } from "@remix-run/react";
import logo from "../assets/images/logo.png";
import { NavList, UserList } from "../utils/navlist";
export function Sider() {
  return (
    <>
      <div className=" bg-white/20 min-h-screen rounded-2xl overflow-hidden">
        <div className="bg-black/60 w-full flex py-2 items-center gap-5">
          <img src={logo} alt="" className=" h-20 w-auto" />
          {/* <div className="text-3xl uppercase font-serif">Cryser Shop</div> */}
        </div>
        <div className=" mt-10 bg-white/40  rounded-xl flex flex-col pb-6">
          <h1 className="text-sm text-black/40 font-extrabold p-4 pb-3">
            Menu
          </h1>
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
          <hr className="border-gray-900 pb-10" />
          <h1 className="text-sm text-black/40 font-extrabold p-4 pb-3">
            Account
          </h1>
          {UserList.map((user, i) => {
            const Icon = user.icon;
            return (
              <NavLink
                to={user.link}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? "text-white  font-bold px-6 py-3 bg-black/50 flex items-center gap-3"
                    : "text-gray-900  font-bold px-6 py-3 flex items-center gap-3"
                }
              >
                <Icon size={24} />
                {user.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
