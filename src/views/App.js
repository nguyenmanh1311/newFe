import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Basket from "../pages/Basket";
import CheckAddress from "../pages/CheckAddress";
import DeliveryMethod from "../pages/DeliveryMethod";
import PaymentMethod from "../pages/PaymentMethod";
import OrderReview from "../pages/OrderReview";
import Category from "../pages/Category";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Account from "../pages/Account";
import OrderDetail from "../pages/OrderDetail";
import AllOrder from "../pages/AllOrder";
import Wishlist from "../pages/Wishlist";
import Login from "../components/Login/Login";
import ProductByBrand from "../pages/ProductByBrand";
import ProductByCategory from "../pages/ProductByCategory";
import Search from "../pages/Search";
import PaymentResolve from "../pages/PaymentResolve";
import PaymentSuccess from "../pages/PaymentResponse/PaymentSuccess";
import PaymentFail from "../pages/PaymentResponse/PaymentFail";
import Address from "../pages/Address";

function App() {
  return (
    <div className="App">
      <div className="Content-App">
        <BrowserRouter>
          <Routes>
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/fail" element={<PaymentFail />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/error" element={<Error />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/check-address" element={<CheckAddress />} />
            <Route path="/delivery-method" element={<DeliveryMethod />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/order-review" element={<OrderReview />} />
            <Route path="/collections" element={<Category />} />
            <Route path="/checkout_result" element={<PaymentResolve />} />
            <Route path="/search">
              <Route path=":input" element={<Search />} />
            </Route>

            <Route path="/product">
              <Route path="brand">
                <Route path=":id" element={<ProductByBrand />} />
              </Route>
              <Route path="category">
                <Route path=":id" element={<ProductByCategory />} />
              </Route>
            </Route>
            <Route path="/product-detail">
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/account">
              <Route index element={<Account />} />
              <Route path="addresses" element={<Address />} />
            </Route>
            <Route path="/order-detail">
              <Route path=":id" element={<OrderDetail />} />
            </Route>
            <Route path="/all-order" element={<AllOrder />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
