import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header" style={{marginTop:'15px' }}>
        <div className="container d_flex">
          <div className=" bottom-0 d_flex">
            <h4
              style={{
                color: "#FF0000 ",
                fontSize: "150%",
                margin: "10px ",
                fontWeight: "bold",
              }}
            >
              ALYM STORE
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Главная страница</Link>
              </li>
              <li>
                <Link to="/pages">О магазине</Link>
              </li>  
              <li>
                <Link to="/track">Онлайн карта</Link>
              </li>
              <li>
                <Link to="/contact">Связаться</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
