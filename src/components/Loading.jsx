import PropTypes from 'prop-types';
import Logo from '../../public/assets/images/logo/shop-logo-6.webp'; // Ensure the path is correct

const Loading = ({ loading = true, children }) => {
  if (!loading) {
    return children;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="relative flex items-center justify-center">
        {/* Glowing Effect Around Spinner */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-lg animate-pulse"></div>

        {/* Logo in the Center of the Spinner */}
        <img
          src={Logo}
          alt="Logo"
          className="absolute w-20 h-20 object-contain rounded-full" // Logo animation
        />

        {/* Enhanced Loading Spinner */}
        <svg
          className="animate-spin h-28 w-28 text-gray-600 z-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20 text-gray-400"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-70 text-gray-600"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loading;

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};
