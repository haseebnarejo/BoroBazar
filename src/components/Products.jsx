import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Heading from './Heading';

const products = [
  {
    id: 1,
    img: './assets/images/products/p2.png',
    badge: 'ON SALE',
    price: '$2.64',
    oldPrice: '$2.74',
    name: 'Fresh Green Leaf Lettuce',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 2,
    img: './assets/images/products/p3.png',
    badge: 'ON SALE',
    price: '$2.50',
    oldPrice: '$2.74',
    name: 'Leafy Romaine Mixed Lettuce',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 3,
    img: './assets/images/products/p4.png',
    price: '$25.00 - $40.00',
    name: 'Fresh Express Iceberg Garden Salad Blend',
    quantity: '1 Bag',
    action: 'view',
  },
  {
    id: 4,
    img: './assets/images/products/p5.png',
    price: '$1.50',
    name: 'Organic Girl Lettuce',
    quantity: '1 Bag',
    action: 'add',
  },
  {
    id: 5,
    img: './assets/images/products/p6.png',
    badge: 'ON SALE',
    price: '$2.60',
    oldPrice: '$3.00',
    name: 'Organic Spring Mix',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 6,
    img: './assets/images/products/p7.png',
    price: '$3.00 - $5.00',
    name: 'Organic Firm Fresh White Lettuce',
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 7,
    img: './assets/images/products/p8.png',
    price: '$5.00 - $15.00',
    name: 'Great Value Tortilla Chips, Cantina Style',
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 8,
    img: './assets/images/products/p9.png',
    badge: 'ON SALE',
    price: '$6.20',
    oldPrice: '$6.98',
    name: "Frito Lay's Family Fun Mix Snacks",
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 9,
    img: './assets/images/products/p10.png',
    price: '$5.00 - $15.00',
    name: "Lay's Kettle Cooked Mesquite Potato Chips",
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 10,
    img: './assets/images/products/p11.png',
    price: '$5.00 - $15.00',
    name: "Lay's Bar-B-Que Potato Chips",
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 11,
    img: './assets/images/products/p12.png',
    price: '$5.00 - $15.00',
    name: "Chester's Fries Flamen Hot Corn Potato Snacks",
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 12,
    img: './assets/images/products/p13.png',
    price: '$15.00 - $25.00',
    name: "Lay's Kettle Cooked Jalapeno Potato Chips",
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 13,
    img: './assets/images/products/p14.png',
    price: '$15.00 - $25.00',
    name: 'Ruffles Party Size Cheddar & Sour Cream',
    quantity: '1 each',
    action: 'view',
  },
  {
    id: 14,
    img: './assets/images/products/p15.png',
    price: '$25.00 - $40.00',
    name: 'Calavo Fresh Avocados',
    quantity: '1 Bag',
    action: 'view',
  },
  {
    id: 15,
    img: './assets/images/products/p16.png',
    price: '$25.00 - $40.00',
    name: 'Fresh Cilantro',
    quantity: '1 Bag',
    action: 'view',
  },
  {
    id: 16,
    img: './assets/images/products/p17.png',
    badge: 'ON SALE',
    price: '$2.64',
    oldPrice: '$2.99',
    name: 'Gourmet Garden™ Lightly Dried Cilantro',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 17,
    img: './assets/images/products/p18.png',
    badge: 'ON SALE',
    price: '$1.50',
    oldPrice: '$1.99',
    name: 'Organic Green Cabbage',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 18,
    img: './assets/images/products/p19.png',
    price: '$1.99',
    name: 'Green Giant Peas',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 19,
    img: './assets/images/products/p19.png',
    price: '$3.99',
    name: 'Freshness Guaranteed Mango Spears',
    quantity: '1 each',
    action: 'add',
  },
  {
    id: 20,
    img: './assets/images/products/p20.png',
    price: '$25.00 - $40.00',
    name: 'Fresh Express Iceberg Garden Salad Blend',
    quantity: '1 Bag',
    action: 'view',
  },
  {
    id: 21,
    img: './assets/images/products/p21.png',
    badge: 'ON SALE',
    price: '$1.50',
    oldPrice: '$1.99',
    name: 'Organic Green Cabbage',
    quantity: '1 each',
    action: 'add',
  },
];

function Products() {
  return (
    <div className="container mx-auto py-8">
      <Heading
        title="Best seller grocery near you"
        subtitle="We provide best quality & fresh grocery items near your location"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 4xl:grid-cols-7 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden group"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="object-cover h-full w-full transition-transform duration-300 transform group-hover:scale-110"
              />
              {product.badge && (
                <span className="bg-theme text-white text-xs font-bold px-3 py-1 rounded-full absolute top-0 left-0">
                  {product.badge}
                </span>
              )}
              <div className="mt-4 absolute bottom-0 right-0">
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${product.action === 'add' ? 'bg-theme' : 'bg-theme'
                    }`}
                >
                  {product.action === 'add' ? (
                    <Icon icon="ic:round-plus" className="text-2xl" />
                  ) : (
                    <Icon icon="solar:eye-linear" className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-2 flex items-center gap-3">
              <p className="text-base font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
              )}
            </div>

            <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>

            <p className="text-sm mt-auto text-gray-500">{product.quantity}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Products;
