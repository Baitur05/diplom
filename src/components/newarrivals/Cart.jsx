import React from "react";
import Ndata from "./Ndata";

const Cart = ({ isAllShow, setAllShow }) => {
  return (
    <>
      <div
        className={`${
          !isAllShow ? "h-[230px]" : "h-[650px]"
        } content grid product transition-[3s] overflow-hidden`}
      >
        {Ndata.map((val, index) => {
          return (
            <>
              <div className="box"  key={index}>
                <div className="img" style={{marginBottom:'10px'}}>
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
