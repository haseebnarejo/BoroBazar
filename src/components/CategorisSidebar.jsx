import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

function CategoriesSidebar() {
  const [activeCategory, setActiveCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Categories data with unique IDs
  const categories = [
    {
      id: 1,
      name: "Fresh Vegetables",
      icon: "assets/images/cat-items/c1.svg",
      items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
    },
    {
      id: 2,
      name: "Diet Foods",
      icon: "assets/images/cat-items/c2.svg ",
      items: [],
    },
    {
      id: 3,
      name: "Diet Nutrition",
      icon: "assets/images/cat-items/c3.svg",
      items: [],
    },
    {
      id: 4,
      name: "Fast Food Items",
      icon: "assets/images/cat-items/c4.svg",
      items: [],
    },
    {
      id: 5,
      name: "Fruits Items",
      icon: "assets/images/cat-items/c5.svg",
      items: [],
    },
    {
      id: 6,
      name: "Healthy Foods",
      icon: "assets/images/cat-items/c6.svg",
      items: [],
    },
    {
      id: 7,
      name: "Grocery Items",
      icon: "assets/images/cat-items/c7.svg",
      items: [],
    },
    {
      id: 8,
      name: "Fresh Vegetables",
      icon: "assets/images/cat-items/c1.svg",
      items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
    },
    {
      id: 9,
      name: "Diet Foods",
      icon: "assets/images/cat-items/c2.svg ",
      items: [],
    },
    {
      id: 10,
      name: "Diet Nutrition",
      icon: "assets/images/cat-items/c3.svg",
      items: [],
    },
    {
      id: 11,
      name: "Fast Food Items",
      icon: "assets/images/cat-items/c4.svg",
      items: [],
    },
    {
      id: 12,
      name: "Fruits Items",
      icon: "assets/images/cat-items/c5.svg",
      items: [],
    },
    {
      id: 13,
      name: "Healthy Foods",
      icon: "assets/images/cat-items/c6.svg",
      items: [],
    },
    {
      id: 14,
      name: "Grocery Items",
      icon: "assets/images/cat-items/c7.svg",
      items: [],
    },
    {
      id: 15,
      name: "Fresh Vegetables",
      icon: "assets/images/cat-items/c1.svg",
      items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
    },
    {
      id: 16,
      name: "Diet Foods",
      icon: "assets/images/cat-items/c2.svg ",
      items: [],
    },
    {
      id: 17,
      name: "Diet Nutrition",
      icon: "assets/images/cat-items/c3.svg",
      items: [],
    },
    {
      id: 18,
      name: "Fast Food Items",
      icon: "assets/images/cat-items/c4.svg",
      items: [],
    },
    {
      id: 19,
      name: "Fruits Items",
      icon: "assets/images/cat-items/c5.svg",
      items: [],
    },
  ];

  // Dietary needs options
  const dietaryOptions = [
    "Organic",
    "Kakogenic",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
  ];

  // Options to display (limited or full)
  const visibleOptions = showAll ? dietaryOptions : dietaryOptions.slice(0, 3);

  // Toggle category
  const toggleCategory = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? "" : categoryId));
  };

  return (
    <div className="w-[35%] hidden lg:block bg-white py-8 rounded-lg">
      <h2 className="font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="border border-gray-200 overflow-hidden group hover:bg-gray-100"
          >
            {/* Category Header */}
            <button
              onClick={() =>
                category.items.length > 0 && toggleCategory(category.id)
              }
              className="flex items-center justify-between w-full p-4"
            >
              <span className="flex items-center gap-3">
                <img
                  src={category.icon}
                  alt={category.name}
                  className=""
                />
                <span className="font-medium">{category.name}</span>
              </span>
              {category.items.length > 0 && (
                <Icon
                  icon="prime:angle-down"
                  className={`transition-transform duration-300 text-4xl ${activeCategory === category.id ? "rotate-180" : ""
                    }`}
                />
              )}
            </button>

            {/* Subcategories */}
            {activeCategory === category.id && category.items.length > 0 && (
              <ul className="p-4 space-y-4 group-hover:bg-white">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <span>{item}</span>
                    <input
                      type="checkbox"
                      className="w-5 h-5 form-checkbox rounded-full border-gray-400 text-green-500 focus:ring-green-500"
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Dietary Needs Section */}
      <div className="mt-8 w-full bg-white p-4">
        <h2 className="font-bold text-lg mb-4">Dietary Needs</h2>
        <ul className="border pb-4 px-3">
          {visibleOptions.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-gray-800 border-b py-4 font-bold"
            >
              <span>{option}</span>
              <input
                type="checkbox"
                className="w-5 h-5 form-checkbox rounded-full border-gray-400 text-green-500 focus:ring-green-500"
              />
            </li>
          ))}
          {dietaryOptions.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 flex items-center justify-center text-green-500 hover:text-green-600 text-sm font-medium"
            >
              {showAll ? "See less" : "See more"}
              <Icon
                icon="prime:angle-down"
                className={`ml-1 transition-transform duration-300 ${showAll ? "rotate-180" : ""
                  }`}
              />
            </button>
          )}
        </ul>
      </div>

      <div className="mt-8 w-full bg-white p-4">
        {/* Heading */}
        <h2 className="font-bold text-lg mb-4">Brands</h2>

        {/* Brands List */}
        <ul className="border pb-4 px-3">
          {/* Brand Item */}
          <li className="flex items-center justify-between text-gray-800 border-b py-4 font-bold">
            <span>Good & Gather</span>
            <input
              type="checkbox"
              className="w-5 h-5 form-checkbox rounded-full border-gray-400 text-green-500 focus:ring-green-500"
            />
          </li>
          {/* Brand Item */}
          <li className="flex items-center justify-between text-gray-800 border-b py-4 font-bold">
            <span>Green Giant</span>
            <input
              type="checkbox"
              className="w-5 h-5 form-checkbox rounded-full border-gray-400 text-green-500 focus:ring-green-500"
            />
          </li>
          {/* Brand Item */}
          <li className="flex items-center justify-between text-gray-800 border-b py-4 font-bold">
            <span>Veg-Land</span>
            <input
              type="checkbox"
              className="w-5 h-5 form-checkbox rounded-full border-gray-400 text-green-500 focus:ring-green-500"
            />
          </li>
        </ul>
      </div>

    </div>
  );
}

export default CategoriesSidebar;
