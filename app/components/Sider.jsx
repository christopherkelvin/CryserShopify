import { NavLink } from "@remix-run/react";
import { NavList, UserList } from "../utils/navlist";
export function Sider() {
  return (
    <>
      <div className=" bg-gray-300 dark:bg-slate-900 min-h-screen">
        <div className=" w-full text-center py-5">
          <div className="text-3xl uppercase font-bold font-merriweather dark:text-white">
            Cryser Shop
          </div>
        </div>
        <div className=" dark:bg-white/30 flex flex-col pb-6">
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
                  `font-bold px-6 py-3 flex items-center gap-3 font-jakarta ${
                    isActive ? "text-white bg-black/50" : "text-gray-900 "
                  }`
                }
              >
                <Icon size={24} />
                {nav.title}
              </NavLink>
            );
          })}
          <hr className="border-gray-900 pb-3" />
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
                  `font-bold px-6 py-3 flex items-center gap-3 ${
                    isActive ? "text-white bg-black/50" : "text-gray-900 "
                  }`
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
