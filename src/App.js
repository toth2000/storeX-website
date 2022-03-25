import { BrowserRouter, Route, Routes } from "react-router-dom";

import Annoucement from "./components/Annoucement/Annoucement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Progress from "./components/Progress/Progess";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Progress />
      <Annoucement />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/" exact element={<Products />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/order" exact element={<Order />} />
        <Route path="/order/:id" exact element={<OrderDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
