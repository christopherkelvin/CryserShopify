import { FaUser } from "react-icons/fa";
import {BiSolidOffer} from "react-icons/bi"
import {
  MdPayments,
  MdHelp,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
export const NavList = [
  {
    link: "/",
    title: "Home",
    icon: FaHome,
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