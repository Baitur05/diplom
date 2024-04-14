import React from "react";
import Home from "../components/MainPage/Home";

const Page = ({ CartItem }) => {
  return (
    <div>
      <Home CartItem={CartItem} />
    </div>
  );
};

export default Page;
