import React from "react";
import Categories from "../components/MainPage/Categories";

const Contact = () => {
  return (
    <div className="mb-96 pb-96">
      <div className="absolute ml-20 w-[80%] text-xl">
        <Categories />
      </div>
      <div className="absolute ml-96 mt-8 pb-20">
        <h2 className="text-3xl font-bold mb-4">Контактная информация</h2>
        <div className="flex">
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
        </div>
        <div className="flex justify-between">
          <div className="">
            <div>
              <h3 className="text-lg font-bold ">Телефон:</h3>
              <p className="text-gray-700">0 553 788 791</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">г. Бишкек</h3>
              <p className="text-gray-700">Ахунбаева көчөсү, 58/4</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="text-lg font-bold">E-mail:</h3>
              <p className="text-gray-700">donchakarimov@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Пн-Вс: 24/7</h3>
              <p className="text-gray-700">Без выходных</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
        </div>
        <div className="cursor-pointer mt-6">
          <h3 className="text-sm  mt-4 mb-2">Бишкек шаары</h3>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Чүй облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Ош облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Ыссык-Көл облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Жалал-Абад облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Нарын облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Талас облусу
          </h2>
          <h2 className="text-2xl py-3 px-3 font-bold text-black bg-slate-100 mb-2">
            Баткен облусу
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
