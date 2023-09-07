import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import React from "react";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProduct from "./components/FeaturedProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<FeaturedProduct />} />

          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="users/admin" element={<Admin/>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
