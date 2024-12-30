  import { lazy } from 'react';

  const websiteRoutes = [
    {
      key: 'home',
      index: true,
      path: '',
      Element: lazy(() => import('../views/website/home/Home')),
    },
    {
      key: 'categories',
      index: true,
      path: 'categories',
      Element: lazy(() => import('../views/website/categories/Categories')),
    },
    {
      key: 'product',
      index: true,
      path: 'product-detail',
      Element: lazy(() => import('../views/website/Products/ProductDetail')),
    },
    {
      key: 'shop',
      index: true,
      path: 'shop',
      Element: lazy(() => import('../views/website/shop/Shop')),
    },
    {
      key: 'faqs',
      index: true,
      path: 'faq',
      Element: lazy(() => import('../views/website/faqs/Faq')),
    },
    {
      key: 'about',
      index: true,
      path: 'about-us',
      Element: lazy(() => import('../views/website/about/About')),
    },
    {
      key: 'policy',
      index: true,
      path: 'privacy-policy',
      Element: lazy(() => import('../views/website/policy/PrivacyPolicy')),
    },
    {
      key: 'terms-conditions',
      index: true,
      path: 'terms-condition',
      Element: lazy(() => import('../views/website/terms-conditions/TermsCondition')),
    },
    {
      key: 'contact-us',
      index: true,
      path: 'contact-us',
      Element: lazy(() => import('../views/website/contact/ContactUs')),
    },
    {
      key: 'checkout',
      index: true,
      path: 'checkout',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'account-settings',
      index: true,
      path: '/setting',
      Element: lazy(() => import('../views/website/Settings/MyAccount')),
    },
    {
      key: 'personal-information',
      index: true,
      path: 'setting/personal-information',
      Element: lazy(() => import('../views/website/Settings/my-account/AccountSetting')),
    },
    {
      key: 'orders',
      index: true,
      path: 'orders',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'wishlist',
      index: true,
      path: 'wishlist',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'address',
      index: true,
      path: 'address',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'notifications',
      index: true,
      path: 'notifications',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'notifications',
      index: true,
      path: 'notifications',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'help-center',
      index: true,
      path: 'help-center',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
    {
      key: 'change-password',
      index: true,
      path: 'change-password',
      Element: lazy(() => import('../views/website/checkout/Checkout')),
    },
  ];

  export default websiteRoutes;
