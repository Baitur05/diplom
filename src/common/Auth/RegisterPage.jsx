import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const URL = "https://api-v2.elchocrud.pro/api/v1/de49b8d99ea7b671e17db89f567f5459/userss"

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      name,
      password,
    };
    try {
      await axios
        .post(URL, { user })
        .then((res) => {
          alert("Success!");
          history.push("/login");
        })
        .catch((e) => console.log(e));
    } catch (e) {
      alert("Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[100px] mb-[100px] w-[350px] m-auto flex flex-col"
    >
      <h1 className="text-2xl font-medium text-center mb-10">Регистрация</h1>
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
              value={name}
              name="name"
              id="name"
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
              value={password}
              name="password"
              id="password"
              required
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10">
          <button className="rounded-md outline-none border-none bg-[#4E45E4] text-white w-full p-2">
            Регистрировать
          </button>
        </div>
        <div>
          <p className="mt-4 text-gray-600 flex gap-2 justify-center">
            Уже есть аккаунт?
            <a
              onClick={() => history.push("/login")}
              className="decoration-solid decoration-blue-600 decoration-1 text-blue-600 hover:decoration-1 cursor-pointer"
            >
              Войти
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
