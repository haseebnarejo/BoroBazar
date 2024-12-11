import React, { useState } from 'react';

const ProductTable = () => {
  // State to keep track of selected checkboxes
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (e, productId) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, productId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== productId));
    }
  };

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "3.0 lb.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className='bg-theme text-white'>
            <th scope="col" className="px-6 py-3">
              Product Id
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              size
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{product.id}</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.color}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.weight}</td>
              <td className="flex items-center px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
