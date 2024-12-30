import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { menuItems } from "../../../constant/data";

function MyAccount() {
  const location = useLocation();

  // Check if the current path matches any route, default to the first item
  const activeRoute = menuItems.some((item) => item.route === location.pathname)
    ? location.pathname
    : menuItems[0].route;

  return (
    <div className="container">
      <div className="w-100 lg:w-[80%] mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-6">
          {/* Sidebar Section */}
          <div className="col-span-1 border">
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.route}
                  className={
                    item.route === activeRoute
                      ? "flex items-center space-x-3 cursor-pointer px-5 py-4 hover:bg-gray-100 bg-gray-200"
                      : "flex items-center space-x-3 cursor-pointer px-5 py-4 hover:bg-gray-100"
                  }
                >
                  <Icon icon={item.icon} className="text-2xl text-gray-500" />
                  <span className="font-medium text-sm text-gray-500">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
