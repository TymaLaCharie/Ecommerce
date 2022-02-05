import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ProductsView from "./pages/Products";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productsView" element={<ProductsView />} />
      </Routes>
    </div>
  );
};

export default App;
