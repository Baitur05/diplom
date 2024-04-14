import React from "react";
import Ndata from "./Ndata";

const Cart = ({ isAllShow, setAllShow }) => {
  return (
    <>
      <div
        className={`${
          !isAllShow ? "h-[200px]" : "h-[600px]"
        } content grid product transition-[3s] overflow-hidden`}
      >
        {Ndata.map((val, index) => {
          return (
            <>
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}с</span>
              </div>
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}с</span>
              </div>

              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}с</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
