import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer >
        <div className="container grid2" >
          <div className="box">
            <h1>Онлайн магазин</h1>
            <p>
            Мы расширили наш ассортимент до ста миллионов товаров и предлагаем конкурентные цены.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div style={{
                translate: -30
              }} className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Про нас</h2>
            <ul>
              <li>Карьера</li>
              <li>Наш магазин</li>
              <li>Условия</li>
              <li>Наши заботы</li>
              <li>Конфиденциальность</li>
            </ul>
          </div>
          <div className="box">
            <h2>Обслуживание клиентов</h2>
            <ul>
              <li>Помощь</li>
              <li>Как можно купить</li>
              <li>Следите за заказом</li>
              <li>Корпоративные и оптовые закупки</li>
              <li>Возвраты и возврат денег</li>
            </ul>
          </div>
          <div className="box">
            <h2>Наши контакты</h2>
            <ul>
              <li>г Бишкек</li>
              <li>Email: alym01001@gmail.com</li>
              <li>Phone: +996 551 570 570</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
