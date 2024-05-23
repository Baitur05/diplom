import React, { useState } from "react";
import admin from "../../../admin.jpg";
import axios from "axios";

const URL =
  "https://api-v2.elchocrud.pro/api/v1/f106912e7d27ee22a0512d9d9039deb8/addmin";

export default function AdminLogin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .get(URL)
        .then((res) => {
          const data = res.data;
          setData(data);
          checkAdmin(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log("Error sending");
    }
  };

  const checkAdmin = (data) => {
    if (!data.length) {
      alert("Админ не найден!");
      return;
    }
    const found = data.find(
      (admin) => login == admin.user.name && password == admin.user.password
    );
    if (found) {
      window.location.href = "https://alymjan-panel.netlify.app/";
    } else {
      alert("Неправильный логин или пароль");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[50px] mb-[100px] w-[350px] m-auto flex flex-col"
    >
      <div className="flex gap-3 items-center mb-[40px]">
        <img className="w-[70px] align-middle" src={admin} alt="Error" />
        <h2 className="text-[30px]">Админ Панель</h2>
      </div>
      <div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Логин
          </label>
          <div className="relative mt-2 rounded-md shadow-sm  ">
            <input
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              value={login}
              required
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Пароль
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10">
          <button className="rounded-md outline-none border-none bg-[#4E45E4] text-white w-full p-2 flex justify-center align-center">
            Войти
          </button>
        </div>
      </div>
    </form>
  );
}
