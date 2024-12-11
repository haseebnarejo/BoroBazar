import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const menuItems = [
    { icon: "fa-solid:user-cog", label: "Account Settings", route: "/account-setting" },
    { icon: "fa-solid:shopping-bag", label: "Orders", route: "/cart" },
    { icon: "fa-solid:heart", label: "Wishlist", route: "/wishlist" },
    { icon: "fa-solid:map-marker-alt", label: "Address", route: "/categories" },
    { icon: "fa-solid:bell", label: "Notifications", route: "/notifications" },
    { icon: "fa-solid:file-contract", label: "Legal Notice", route: "/about-us" },
    { icon: "fa-solid:question-circle", label: "Help Center", route: "/faq" },
    { icon: "fa-solid:lock", label: "Change Password", route: "/signin" },
    { icon: "fa-solid:sign-out-alt", label: "Logout", route: "/logout" },
  ];

  return (
    <div className="w-60 border-r bg-white h-screen">
      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} route={item.route} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `flex items-center space-x-3 cursor-pointer px-5 py-4 transition-all ${
          isActive ? "bg-gray-100 text-gray-800" : "text-gray-500"
        } hover:bg-gray-100`
      }
    >
      <Icon icon={icon} className="text-2xl" />
      <span className="font-medium text-sm">{label}</span>
    </NavLink>
  );
};

export default Sidebar;
