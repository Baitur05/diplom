import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Iphone",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
      link: "/phone",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Mac",
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
            <div className="box f_flex" key={index}>
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
