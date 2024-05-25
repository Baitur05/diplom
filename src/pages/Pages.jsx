import React, { useState } from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import { MainPage } from "./MainPage";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  const [isAllShow, setAllShow] = useState(false);
  return (
    <>
      <Home CartItem={CartItem} />
      {/* <MainPage /> */}
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals isAllShow={isAllShow} setAllShow={setAllShow} />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  );
};

export default Pages;
