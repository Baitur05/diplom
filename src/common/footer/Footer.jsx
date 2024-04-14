import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Онлайн дүкөн</h1>
            <p>
              Биз 100 миллиондон ашык баардык ассортименттерди конкренттүү түрдө
              сунуштайбыз..
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Биз жөнүндө</h2>
            <ul>
              <li>Карьерабыз</li>
              <li>Биздин дукон</li>
              <li>Our Cares</li>
              <li>Шарттар жана жоболор</li>
              <li>Купуялуулук</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Жардам борбору</li>
              <li>Кантип сатып алса болот </li>
              <li>Заказыңызды көзөмөлдөңүз </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Корпоративдик жана жапырт сатып алуу </li>
            </ul>
          </div>
          <div className="box">
            <h2>Биз менен байланыш</h2>
            <ul>
              <li>Ахунбаева 14, Бишкек, Кыргызстан </li>
              <li>Email: daniel.karimov@gmail.com</li>
              <li>Phone: +996 553 788 791</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
