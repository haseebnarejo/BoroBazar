import { lazy } from 'react';

const authRoute = [
  {
    key: 'login',
    index: true,
    path: 'signin',
    Element: lazy(() => import('../views/auth/SignIn')),
  },
  {
    key: 'signup',
    index: true,
    path: 'signup',
    Element: lazy(() => import('../views/auth/SignUp')),
  },
  // {
  //   key: 'auth.verify',
  //   index: true,
  //   path: 'verify',
  //   Element: lazy(() => import('../views/auth/authOtp')),
  // },
  {
    key: 'auth.forgot',
    index: true,
    path: 'forgot-password',
    Element: lazy(() => import('../views/auth/forgetPassword')),
  },
  // {
  //   key: 'auth.password',
  //   index: true,
  //   path: 'reset-password',
  //   Element: lazy(() => import('../views/auth/Password')),
  // },
];

export default authRoute;
