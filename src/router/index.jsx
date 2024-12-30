import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import userRoutes from './user';
import authRoute from './auth';
import websiteRoutes from './website';
// const Layout = lazy(() => import('../layout/Layout'));
const AuthLayout = lazy(() => import('../layout/authLayout'));
const WebsiteLayout = lazy(() => import('../layout/WebsiteLayout'));

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {websiteRoutes.map(({ Element, index, key, path }) => (
            <Route path={path} index={index} element={<Element />} key={key} />
          ))}
        </Route>
        <Route path="/" element={<AuthLayout />}>
          {authRoute.map(({ Element, index, key, path }) => (
            <Route index={index} path={path} element={<Element />} key={key} />
          ))}
        </Route>
        {/* <Route path="/*" element={<Layout />}>
          {userRoutes.map(({ Element, index, key, path }) => (
            <Route index={index} path={path} element={<Element />} key={key} />
          ))}
        </Route> */}
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Router;
