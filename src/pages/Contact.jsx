import React, { useState } from "react";
import Categories from "../components/MainPage/Categories";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleClick5 = () => {
    setOpen5(!open5);
  };

  const handleClick6 = () => {
    setOpen6(!open6);
  };

  const handleClick7 = () => {
    setOpen7(!open7);
  };


  return (
    <div>
      <div className="absolute text-xl">
        <Categories />
      </div>
      <div className="w-100">
        <div className="ml-96 pb-2">
          <h2 className="text-3xl font-bold">Контактная информация</h2>
          <div className="flex">
            <hr className="border-[1px] border-gray-500 my-4 w-96" />
            <hr className="border-[1px] border-gray-500 my-4 w-96" />
          </div>
          <div className="flex justify-normal">
            <div className="">
              <div>
                <h3 className="text-lg font-bold ">Телефон:</h3>
                <p className="text-gray-700">+996 551 57 05 71</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">г. Бишкек</h3>
                <p className="text-gray-700">ул. Ахунбаева, 55/5</p>
              </div>
            </div>
            <div className="pl-80">
              <div className="">
                <h3 className="text-lg font-bold">E-mail:</h3>
                <p className="text-gray-700">alym_01001@gmail.com</p>
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
          <div className="cursor-pointer mt-6 w-[95%]">
            <h2 onClick={handleClick} className="text-xl py-2 px-2 font-bold text-black bg-slate-100 mb-2 flex justify-between">
              Чүйская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick2}>
              Ошская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick3}>
              Ыссык-Кульская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick4}>
              Жалал-Абадская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick5}>
              Нарынская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick6}>
              Таласская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open6} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
            <h2 className="text-xl py-3 px-3 font-bold text-black bg-slate-100 mb-2 flex justify-between" onClick={handleClick7}>
              Баткенская область
              {open ? <ExpandLess /> : <ExpandMore />}
            </h2>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <div className="max-w-xl">
                    <h2 className="text-xl font-bold mb-2">
                      Как нас найти
                    </h2>
                    <ul className="mb-4">
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 1. Азия Молл:</span>  проспект Ч. Айтматова, 3, ТРЦ «Азия Молл», -1 этаж, рядом с гипермаркетом «Фрунзе», График работы: Пн-Чт (10:00-20:00) Обеденный перерыв Пн-Пт ( 13:00-14:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 2. ЦУМ ALYM STORE:</span> пр-т Чуй, 155 - ТЦ "ЦУМ", 1 этаж, График работы: Пн, Ср, Ср, Чт, Пт, Вс (10:00-20:45) Пт (10:00-19:45)
                      </li>
                      <li className="mb-4"> <span className="font-bold text-lg"> 3.Аламедин Гранд:</span> ул. Шелковый Путь, 150а/Алматинская. Аламедин - Гранд, Расписание: Пн-Чт (09:00-20:00)</li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 4. Дордой Плаза:</span> ул. Ибраимова, 115, «Дордой Плаза» (западная сторона ТЦ), График работы: Пн-Чт (10:00-22:00)
                      </li>
                      <li className="mb-4">
                        <span className="font-bold text-lg"> 5. Бишкек Парк:</span> ул. Киевская, 148, ТРЦ «Бишкек Парк», 1 этаж, график работы: пн-чт (10:00-22:00)
                      </li>
                    </ul>
                  </div>
                </ListItemButton>
              </List>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;