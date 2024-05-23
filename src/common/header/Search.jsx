import React from "react";
import logo from ".././header/logostore.png";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img
              src={logo}
              alts=""
              style={{
                width: "80%",
              }}
            />
            {/* Online Store */}  
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Поиск..." />
            <span style={{margin:'auto'}}>Все</span>
          </div>

          <div className="icon f_flex width">
            <li>
              <Link to="/login">
                <i className="fa fa-user icon-circle"></i>
              </Link>
            </li>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
