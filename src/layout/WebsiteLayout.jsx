import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function WebsiteLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className="font-inter">
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
