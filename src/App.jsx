import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
  import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Faq from './pages/Faq';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp.jsx';
import SellerSignup from './pages/SellerSignup.jsx'
import AccountSetting from './pages/MyAccount.jsx';
import TermsCondition from './pages/TermsCondition.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/seller-signup" element={<SellerSignup/>} />
        <Route path="/account-setting/*" element={<AccountSetting />} />
      </Routes>
    </Router>
  )
}

export default App

