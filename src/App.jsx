  // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // import Home from "./pages/Home"
  // import Categories from "./pages/Categories"
  // import ProductDetail from './pages/ProductDetail';
  // import Cart from './pages/Cart';
  //   import ContactUs from './pages/ContactUs';
  // import About from './pages/About';
  // import Checkout from './pages/Checkout';
  // import Faq from './pages/Faq';
  // import Shop from './pages/Shop';
  // import SignIn from './pages/SignIn';
  // import SignUp from './pages/SignUp.jsx';
  // import SellerSignup from './pages/SellerSignup.jsx'
  // import AccountSetting from './pages/MyAccount.jsx';
  // import TermsCondition from './pages/TermsCondition.jsx';
  // import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

  // function App() {

  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/categories" element={<Categories />} />
  //         <Route path="/product-detail" element={<ProductDetail />} />
  //         <Route path="/cart" element={<Cart />} />
  //         <Route path="/contact-us" element={<ContactUs />} />
  //         <Route path="/about-us" element={<About />} />
  //         <Route path="/checkout" element={<Checkout />} />
  //         <Route path="/faq" element={<Faq />} />
  //         <Route path="/terms-condition" element={<TermsCondition />} />
  //         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  //         <Route path="/shop" element={<Shop/>} />
  //         <Route path="/signin" element={<SignIn/>} />
  //         <Route path="/signup" element={<SignUp/>} />
  //         <Route path="/seller-signup" element={<SellerSignup/>} />
  //         <Route path="/account-setting/*" element={<AccountSetting />} />
  //       </Routes>
  //     </Router>
  //   )
  // }

  // export default App

  import React from 'react'
  import Router from './router';
  import { useDispatch, useSelector } from 'react-redux';
  import { useEffect } from 'react';
  import { handleError } from './utils/functions';
  import axiosInstance from './configs/axios.config';
  import { setUser } from './store/slice/auth';
  import './index.css'



  const App = () => {
    // const { token } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   if (!token) return;
    //   const getSession = async () => {
    //     try {
    //       const { data } = await axiosInstance.get('/common/session');
    //       if (!data.error) {
    //         dispatch(setUser(data.data));
    //       }
    //     } catch (error) {
    //       handleError(error);
    //     }
    //   };
    //   // getSession();
    // }, [token, dispatch]);
    return <Router />;
  }

  export default App

