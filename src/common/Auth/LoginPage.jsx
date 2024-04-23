import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import spin from "../../spin.png";

const URL =
  "https://api.elchocrud.pro/api/v1/f81b4f2ea246be98b7d7461d53481024/users";

// const URL = process.env.DATA_API_KEY

export const LoginPage = (setRegistered, registered) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(URL)
        .then((res) => {
          const data = res.data;
          setData(data);
          checkAccount(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log("Error sending");
    }
  };

  const checkAccount = (data) => {
    if (!data.length) {
      alert("Аккаунт не найден");
      return;
    }
    const found = data.find(
      (user) => user.user.name == name && user.user.password == password
    );
    if (found) {
      alert("Успешно зашли!");
      history.push('/');
    } else {
      alert("Не правильный логин или пароль");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[100px] mb-[100px] w-[350px] m-auto flex flex-col"
    >
      <h1 className="text-2xl font-medium text-center mb-10">Логин</h1>
      <div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Имя
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              value={name}
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
        <div>
          <p className="mt-4 text-gray-600 flex gap-2 justify-center">
            Ещё нет аккаунта?
            <a
              onClick={() => history.push("/register")}
              className="decoration-solid decoration-blue-600 decoration-1 text-blue-600 hover:decoration-1 cursor-pointer"
            >
              Создать сейчас
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};
