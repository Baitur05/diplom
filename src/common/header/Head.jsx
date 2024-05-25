import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Head = ({ user }) => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +996 551 57 05 71</label>
          </div>
          <div>
            <ul className="flex justify-end">
              <li>
                <Link to="/faq">Theme FAQ"</Link>
              </li>
              <li>
                <Link to="/help">Помошь?</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
