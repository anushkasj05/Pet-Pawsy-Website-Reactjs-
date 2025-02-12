import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import PayComplete from "./pages/PayComplete";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import AndroidPhone from "./pages/DryFood";
import PuppyFood from "./pages/PuppyFood";
import DryFood from "./pages/DryFood";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="paycomplete" element={<PayComplete />} />
            <Route path="prodetail/:id" element={<ProductDetail />} />
            <Route path="search" element={<Search />} />
            <Route path="puppyfood" element={<PuppyFood />} />
            <Route path="dryfood" element={<DryFood />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
