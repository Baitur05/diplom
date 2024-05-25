import React, { useState } from "react";
import logo from ".././header/logostore.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Search = ({ CartItem }) => {

  const [searchedText, setSearchedText] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    setSearchedText(e.target.value);
  }

  const handleKeyDown = (e) => {
    console.log(searchedText);
    if (e.keyCode == 13) {
      history.push("/result", { params: searchedText });
    }
  }


  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <NavLink to="/">
              <img
                src={logo}
                alts=""
                style={{
                  width: "90%",
                }}
              />
            </NavLink>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input onKeyDown={handleKeyDown} type="text" placeholder="Поиск..." onChange={handleSearch} />
            <span style={{ margin: 'auto' }}>Все</span>
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
