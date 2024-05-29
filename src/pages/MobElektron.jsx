import React, { useState } from "react";

const MobElektron = () => {
  const productDataPhone = [
    {
      id: 1,
      discount: 10,
      cover: "./images/mobPhones/iphone15promax.png",
      name: "15 pro max",
      price: 109470,
    },
    {
      id: 2,
      discount: 10,
      cover: "./images/mobPhones/iphone15pro.png",
      name: "iPhone 15 pro",
      price: 100000,
    },
    {
      id: 3,
      discount: 2,
      cover: "./images/mobPhones/iphone15.png",
      name: "iPhone 15",
      price: 92560,
    },
    {
      id: 4,
      discount: 5,
      cover: "./images/mobPhones/iphone15plus.png",
      name: "15 plus",
      price: 90000,
    },
    {
      id: 5,
      discount: 5,
      cover: "./images/mobPhones/iphone14plus.png",
      name: "14 plus",
      price: 77000,
    },
    {
      id: 6,
      discount: 5,
      cover: "./images/mobPhones/iphone14.png",
      name: "iPhone 14",
      price: 70000,
    },
    {
      id: 7,
      discount: 4,
      cover: "./images/mobPhones/iphone13.png",
      name: "iPhone 13",
      price: 55000,
    },
    {
      id: 8,
      discount: 5,
      cover: "./images/mobPhones/iphone12.png",
      name: "iPhone 12",
      price: 30000,
    },
    {
      id: 9,
      discount: 5,
      cover: "./images/mobPhones/iphone11.png",
      name: "iPhone 11",
      price: 25000,
    },
    {
      id: 10,
      discount: 5,
      cover: "./images/mobPhones/iphone14.png",
      name: "iPhone 14",
      price: 70000,
    },
    {
      id: 11,
      discount: 4,
      cover: "./images/mobPhones/iphone13.png",
      name: "iPhone 13",
      price: 55000,
    },
  ];

  const [addToCart, setAddToCart] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const handleAddToCart = (product) => {
    setAddToCart((prevCart) => [...prevCart, product]);
  };

  if (!productDataPhone || productDataPhone.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <section className="bg-[#f6f9fc] py-12">
      <div className="container mx-auto">
        <div className="heading f_flex mb-8 text-lg">
          <i className="fa fa-bolt"></i>
          <h1 className="mt-2">Телефоны</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productDataPhone.map((product) => {
            return (
              <div className="box" key={product.id}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount text-xs">
                      {product.discount}% скидка
                    </span>
                    <img src={product.cover} alt={product.name} className="my-4ё" />
                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i className="fa-regular fa-heart" onClick={increment}></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4 className="mt-2">{product.price}с</h4>
                      <button onClick={() => handleAddToCart(product)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobElektron;
