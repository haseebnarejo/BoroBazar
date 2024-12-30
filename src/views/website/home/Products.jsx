import { Icon } from '@iconify/react/dist/iconify.js';
import Heading from '../../../components/shared/Heading';
import { Link } from 'react-router-dom';
import {products2} from '../../../constant/data';

function Products() {
  return (
    <div className="container mx-auto py-8">
      <Heading
        title="Best Seller Groceries Near You"
        subtitle="We provide the best quality & fresh grocery items near your location"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 4xl:grid-cols-7 gap-4">
        {products2.map((product) => (
          <Link
            to="/product-detail"
            key={product.id}
            className="flex flex-col h-full border-2 border-gray-100 rounded-lg p-4 shadow-sm overflow-hidden group"
            aria-label={`View details of ${product.name}`}
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden">
              <img
                src={product.img}
                alt={`Image of ${product.name}`}
                className="object-cover h-full w-full transition-transform duration-300 transform group-hover:scale-110"
              />
              {product.badge && (
                <span className="bg-theme text-white text-xs font-bold px-3 py-1 rounded-full absolute top-0 left-0">
                  {product.badge}
                </span>
              )}
              <div className="mt-4 absolute bottom-0 right-0">
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${product.action === 'add' ? 'bg-theme' : 'bg-theme'}`}
                  aria-label={product.action === 'add' ? 'Add to Cart' : 'View Product Details'}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
