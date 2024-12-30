import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { menuItems } from "../../../constant/data";

const Sidebar = () => {
  return (
    <nav className="flex flex-col">
      {menuItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} label={item.label} route={item.route} />
      ))}
    </nav>
  );
};

const NavItem = ({ icon, label, route }) => {
  return (
    <NavLink
    to={route === "/" ? "/" : route}
      className={({ isActive }) =>
        isActive ? "flex items-center space-x-3 cursor-pointer px-5 py-4 hover:bg-gray-100 bg-gray-200" : "flex items-center space-x-3 cursor-pointer px-5 py-4 hover:bg-gray-100"
      }
    >
      <Icon icon={icon} className="text-2xl text-gray-500" />
      <span className="font-medium text-sm text-gray-500">{label}</span>
    </NavLink>
  );
};

export default Sidebar;
