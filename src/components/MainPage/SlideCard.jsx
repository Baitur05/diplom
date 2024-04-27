import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from "./Sdata";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SlideCard = () => {
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button
                    onClick={() => history.push("/pages")}
                    className="btn-primary"
                  >
                   Пройдите к коллекциям
                  </button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="" width={250} />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
