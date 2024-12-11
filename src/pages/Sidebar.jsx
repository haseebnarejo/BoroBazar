import React from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const menuItems = [
    { icon: "fa-solid:user-cog", label: "Account Settings" },
    { icon: "fa-solid:shopping-bag", label: "Orders" },
    { icon: "fa-solid:heart", label: "Wishlist" },
    { icon: "fa-solid:map-marker-alt", label: "Address" },
    { icon: "fa-solid:bell", label: "Notifications" },
    { icon: "fa-solid:file-contract", label: "Legal Notice" },
    { icon: "fa-solid:question-circle", label: "Help Center" },
    { icon: "fa-solid:lock", label: "Change Password" },
    { icon: "fa-solid:sign-out-alt", label: "Logout" },
  ];

  return (
    <div className="border">
      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer px-5 py-4 hover:bg-gray-100">
      <Icon icon={icon} className="text-2xl text-gray-500" />
      <span className="font-medium text-sm text-gray-500">{label}</span>
    </div>
  );
};

export default Sidebar;
