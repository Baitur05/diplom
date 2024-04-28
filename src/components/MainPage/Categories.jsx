import React from "react";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { Link } from "react-router-dom/cjs/react-router-dom";


const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Телефоны",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Электроника",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Макбуки",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "AirPods",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Чехол",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "AirPods",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "AirPods",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Чехол",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "AirPods",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Чехол",
      link: "/phone",
    },
  ];

  return (
    <>
      <div className="category w-44">
        {data.map((value, index) => {
          return (
            <div className="box flex items-center" key={index}>
              <img src={value.cateImg} alt="" />
              <Link to={value.link}>
                <span>{value.cateName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
