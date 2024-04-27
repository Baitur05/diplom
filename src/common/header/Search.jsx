import React from "react";
import logo from "../../components/assets/images/63ef8c24f4d39da7df4eafea_Screenshot 2023-02-17 at 8.28.17 PM.png";
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
                width: "50%",
              }}
            />
            {/* Online Store */}
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Поиск..." />
            <span>Все</span>
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
