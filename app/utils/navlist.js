import { FaUser } from "react-icons/fa";
import {BiSolidOffer} from "react-icons/bi"
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdPayments,
  MdHelp,
} from "react-icons/md";
export const NavList = [
  {
    link: "/",
    title: "Dashboard",
    icon: MdDashboard,
  },
  {
    link: "/products",
    title: "Products",
    icon: MdOutlineProductionQuantityLimits,
  },
  {
    link: "/payment",
    title: "Payment",
    icon: MdPayments,
  },
  {
    link: "/help",
    title: "Help",
    icon: MdHelp,
  },
  {
    link: "/customersupport",
    title: "Customer Support",
    icon: MdHelp,
  },
];
export const UserList = [
  {
    link: "/user",
    title: "User",
    icon: FaUser,
  },
  {
    link: "/offers",
    title: "Offers",
    icon: BiSolidOffer,
  },
];