import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = ({ isAllShow, setAllShow }) => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>Жаңы келгендер</h2>
            </div>
            <div className="heading-right row ">
              <span
                onClick={() =>
                  isAllShow ? setAllShow(false) : setAllShow(true)
                }
              >
                {isAllShow ? "Азыраак көрүү" : "Баарын көрүү"}
              </span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Cart isAllShow={isAllShow} setAllShow={setAllShow} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
