import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Order from "./order/Order";
import ForgetPassword from "./views/auth/forgetPassword/ForgetPassword";
import Login from "./views/auth/Login";
import ResetPassword from "./views/auth/resetPassword/ResetPassword";
import Cart from "./views/cart/Cart";

import Container from "./views/Container";
import ProductDetails from "./views/products/ProductDetails";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/resetPassword/:resetPassWordToken" element={<ResetPassword />}/>
      <Route path="/forgetpass" element={<ForgetPassword />}/>
      <Route path="/productDetails/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/order" element={<Order />}/>

    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
