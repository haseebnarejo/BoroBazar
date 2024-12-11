import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SellerSignup from "./pages/SellerSignup";
import AccountSetting from "./pages/AccountSetting";
// import Sidebar from "./components/Sidebar"; // Adjust path as per your folder structure.

function App() {
  return (
    <Router>
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1 p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/seller-signup" element={<SellerSignup />} />
            <Route path="/account-setting/:id" element={<AccountSetting />} />
            <Route path="/account-setting/:id" element={<AccountSetting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
