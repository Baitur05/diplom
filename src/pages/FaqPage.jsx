import React from "react";
import Categories from "../components/MainPage/Categories";
import "./FaqPage.css";

const FaqPage = () => {
  return (
    <div className="mt-5 mb-6">
      <div className="px-16">
        {/* <p className="text-xs text-current">online store-theme FAQ's</p> */}
        <h2 className="text-3xl font-bold text-[#0c2a4d] pt-5 ">
        Часто задаваемые вопросы
        </h2>
        <div className="flex mb-4 pb-7">
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
          <hr className="border-[1px] border-gray-500 my-4 w-96" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">
          Почему следует покупать в Online Store 
          </h2>
          <ul className="mb-4 ">
            <li>
              1.В Online Store - огромный выбор смартфонов мировых брендов Samsung, Xiaomi, Apple, Vivo, Infinix, Tecno
            </li>
            <li>
              2.Покупая в Online Store, вы можете быть уверены, что товар сертифицирован и имеет 100% гарантию качества от производителя.
            </li>
            <li>
              3. На каждый товар предоставляется гарантия.
            </li>
            <li>
              4. Есть возможность оформить любой товар в кредит или в рассрочку.
            </li>
            <li>
              5. Постоянные акции и скидки. Покупать в Online Store – выгодно!
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
               В чем разница между кредитом и рассрочкой?
          </h2>
          <p className="">
            1.Кредит – это вид займа, при котором клиент помимо суммы займа еще оплачивает процентную ставку банка.
          </p>
          <p className=" mb-4">
          Рассрочка – это вид займа, при котором клиент возвращает только займ, ничего не переплачивая банку.
          </p>
          <h2 className="text-2xl font-bold mb-2">
          Какие нужны документы для оформления смартфона в кредит или в рассрочку?
          </h2>
          <p className="">Сизге болгону 2 документ керек:</p>
          <ul className="list-decimal mb-4">
            <li>
              1. Паспорт (если ваш паспорт нового образца – биометрический, необходимо предоставить справку с места жительства);
            </li>
            <li>2. Справка о заработной плате от 3-х месяцев и выше.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
          При покупке смартфона в кредит или в рассрочку паспорт остаётся у вас?
          </h2>
          <p className="mb-4">
          Нет, паспорт необходим только при оформлении кредита. В качестве залога выступает сам смартфон.
          </p>
          <h2 className="text-2xl font-bold mb-2 ">
          Насколько быстро можно оформить кредит?
          </h2>
          <p className=" mb-4">
          Оформление при наличии всех необходимых документов займет всего лишь 20-30 минут. Для начала Вы можете позвонить в колл-центр по номеру 0777777777, где Вас проконсультируют опытные специалисты. Далее Вам остается только подготовить справки и документы. Перед походом за покупкой, позвоните нам, специалисты забронируют смартфон в удобном для Вас магазине и подготовят приятный сюрприз в виде 10Гб интернет-трафика на максимальной скорости.
          </p>
          <h2 className="text-2xl font-bold mb-2">
          Где мне получить справку о заработной плате?
          </h2>
          <p className=" mb-4">Справку о заработной плате Вы можете получить в бухгалтерии Вашей организации.</p>
          <h2 className="text-2xl font-bold mb-2">
          Можно ли приобрести несколько смартфонов в кредит?
          </h2>
          <p className=" mb-4">
          Да, Вы можете приобрести несколько смартфонов в кредит, если банк посчитает, что Ваших доходов достаточно для покупки.
          </p>
          <h2 className="text-2xl font-bold mb-2">У меня еще остались вопросы.</h2>
          <p className=" mb-4">
            Позвоните нам по телефону +996 77 777 777. Будем рады ответить на Ваши вопросы! Также Вы можете заказать звонок – для этого на сайте ostore.kg выберите понравившийся Вам смартфон, нажмите кнопку «заказать», введите свой номер телефона и в скором времени наш менеджер Вам перезвонит.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
