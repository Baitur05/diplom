import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Users from "./pages/Users";
import { Map } from "./pages/Map";
import Contact from "./pages/Contact";
import FaqPage from "./pages/FaqPage";
import HelpPage from "./pages/HelpPage";
import Phone from "./Mini-Pages/Phone/Phone";
import { LoginPage } from "./common/Auth/LoginPage";
import RegisterPage from "./common/Auth/RegisterPage";
import AdminLogin from "./common/Auth/admin";
import Payment from "./common/Payment/Payment"

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const [user, setUser] = useState(false);
  return (
    <>
      <Router>
        <Header user={user} CartItem={CartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          {/* <Route path="/user" exact>
            <Users />
          </Route> */}
          <Route path="/track" exact>
            <Map />
          </Route>
          <Route path="/faq" exact>
            <FaqPage />
          </Route>
          <Route path="/help" exact>
            <HelpPage />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/admin" exact>
            <AdminLogin />
          </Route>
          <Route path="/payment" exact>
            <Payment/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;