import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Бүткүл дүйнөлүк жеткирүү",
      decs: "Биз 100 миллиондон ашык баардык ассортименттерди конкренттүү түрдө сунуштайбыз.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Коопсуз төлөм",
      decs: "Биз 100 миллиондон ашык баардык ассортименттерди конкренттүү түрдө сунуштайбыз.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Ишеним менен соода кылыңыз",
      decs: "Биз 100 миллиондон ашык баардык ассортименттерди конкренттүү түрдө сунуштайбыз.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 колдоо",
      decs: "Биз 100 миллиондон ашык баардык ассортименттерди конкренттүү түрдө сунуштайбыз .",
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
