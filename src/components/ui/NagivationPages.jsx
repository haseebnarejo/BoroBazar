import { Icon } from '@iconify/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Breadcrumb Component
const NavigationPages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Split the current path into an array of breadcrumbs
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav className="flex mt-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home breadcrumb */}
        <li className="inline-flex items-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Icon icon="mdi:home-outline" className="w-4 h-4 me-2.5" />
            Home
          </button>
        </li>
        {/* Dynamic breadcrumbs */}
        {paths.map((path, index) => {
          // Build the breadcrumb's full path
          const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              <div className="flex items-center">
                <Icon
                  icon="mdi:chevron-right"
                  className="rtl:rotate-180 w-4 h-4 text-white mx-1"
                />
                {isLast ? (
                  <span className="ms-1 text-sm font-medium text-gray-100 dark:text-gray-500">
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={fullPath}
                    className="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-100 dark:hover:text-white"
                  >
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default NavigationPages;
