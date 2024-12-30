import { Icon } from "@iconify/react";
import { useState } from "react";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState("");

  const sections = {
    Demos: ["Modern", "Classic", "Vintage", "Minimal", "Trendy", "Elegant", "Refined", "Antique", "Ancient"],

    Categories: ["Electronics", "Furniture", "Clothing", "Books"],
    Dietary: ["Vegetarian", "Vegan", "Keto", "Gluten-Free"],
    Pages: ["About Us", "Contact Us", "Terms & Conditions"],
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  return (
    <div className="relative flex items-center">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600"
      >
        <Icon icon="gg:menu-left" className="text-2xl"/>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 py-8 border-b">
          <div className="flex items-center space-x-2">
            <img src="assets/images/logo/logo.svg" alt="BoroBazar Logo" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            <Icon icon="ic:round-close" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col h-[calc(100%-8rem)]">
          {/* Scrollable Accordion Content */}
          <div className="overflow-y-auto flex-grow px-5 pt-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-600">
            {Object.entries(sections).map(([sectionName, items]) => (
              <div key={sectionName} className="p-4">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(sectionName)}
                  className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
                >
                  <span className="font-bold">{sectionName}</span>
                  <Icon
                    icon={
                      openSection === sectionName
                        ? "akar-icons:chevron-up"
                        : "akar-icons:chevron-down"
                    }
                  />
                </button>

                {/* Accordion Content */}
                {openSection === sectionName && (
                  <ul className="mt-4 space-y-4">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span>-</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Static Links (e.g., Search and Shops) */}
            <div className="p-4">
              <button className="w-full text-left text-gray-800 font-bold">
                Search
              </button>
            </div>
            <div className="p-4">
              <button className="w-full text-left text-gray-800 font-bold">
                Shops
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="p-4 border-t flex gap-4 justify-center items-center">
            <Icon icon="akar-icons:facebook-fill" className="text-xl text-gray-600" />
            <Icon icon="akar-icons:twitter-fill" className="text-xl text-gray-600" />
            <Icon icon="akar-icons:youtube-fill" className="text-xl text-gray-600" />
            <Icon icon="akar-icons:instagram-fill" className="text-xl text-gray-600" />
          </div>
        </div>
      </div>


      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
