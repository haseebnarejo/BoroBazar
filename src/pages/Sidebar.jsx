import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const menuItems = [
    { icon: "fa-solid:user-cog", label: "Account Setting", route: "/account-setting/personal-information" },
    { icon: "fa-solid:shopping-bag", label: "Orders", route: "/account-setting/orders" },
    { icon: "fa-solid:heart", label: "Wishlist", route: "/account-setting/wishlist" },
    { icon: "fa-solid:map-marker-alt", label: "Address", route: "/account-setting/address" },
    { icon: "fa-solid:bell", label: "Notifications", route: "/account-setting/notifications" },
    { icon: "fa-solid:file-contract", label: "Legal Notice", route: "/account-setting/legal-notice" },
    { icon: "fa-solid:question-circle", label: "Help Center", route: "/account-setting/help-center" },
    { icon: "fa-solid:lock", label: "Change Password", route: "/account-setting/change-password" },
    { icon: "fa-solid:sign-out-alt", label: "Logout", route: "/" },
  ];

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
