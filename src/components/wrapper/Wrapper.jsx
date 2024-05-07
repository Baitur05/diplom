import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Глобальная доставка",
      decs: "Мы расширили наш ассортимент до ста миллионов товаров и предлагаем конкурентные цены.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Безопасная оплата",
      decs: "Мы расширили наш ассортимент до ста миллионов товаров и предлагаем конкурентные цены.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Покупайте с доверием",
      decs: "Мы расширили наш ассортимент до ста миллионов товаров и предлагаем конкурентные цены.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "Поддержка 24/7",
      decs: "Мы расширили наш ассортимент до ста миллионов товаров и предлагаем конкурентные цены.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
