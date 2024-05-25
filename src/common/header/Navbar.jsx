

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header" style={{ marginTop: '15px' }}>
        <div className="container d_flex">
          <div className="navlink">
            <nav>
              <ul
                className={
                  MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <NavLink to="/">Главная страница</NavLink>
                </li>
                <li>
                  <NavLink to="/about">О магазине</NavLink>
                </li>
                <li>
                  <NavLink to="/track">Онлайн карта</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Связаться</NavLink>
                </li>
              </ul>
            </nav>
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
      <div /> {/* Закрывающий тег div исправлен */}
    </>
  );
};

export default Navbar;