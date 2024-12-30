import React, { useState } from "react";
import { Icon } from "@iconify/react";

function CartSidebar({span , hidden}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600"
      >
        <div className={`${hidden} lg:flex items-center gap-2`}>
            <Icon icon="mynaui:shopping-bag" className='text-2xl text-gray-500' />
            <span className='text-base'>{span && 'Cart'}</span>
          </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-2xl"
          >
            <Icon icon="ic:round-close" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center py-16 px-6">
          <img
            src="assets/images/other/empty-cart.png"
            alt="Empty Cart"
            className="mb-4"
          />
          <h3 className="text-xl mb-3 font-bold text-gray-800">
            Your cart is empty.
          </h3>
          <p className="text-sm text-gray-500">
            Please add product to your cart list
          </p>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-gray-700">Subtotal:</span>
            <span className="font-bold text-gray-800">$0.00</span>
          </div>
          <p className="text-gray-500 mb-4 w-[70%]">
            Final price and discounts will be determined at the time of payment
            processing.
          </p>
          <button
            className="w-full py-3 text-sm bg-gray-200 text-gray-400 font-bold rounded-md cursor-not-allowed"
            disabled
          >
            Proceed To Checkout
          </button>
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

export default CartSidebar;
