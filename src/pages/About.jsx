import React from 'react';
import Categories from '../components/MainPage/Categories';
import icon1 from "../components/assets/images/Icon-1.svg"
import icon2 from "../components/assets/images/Icon-2.svg"
import icon3 from "../components/assets/images/Icon-3.svg"
import icon4 from "../components/assets/images/Icon-4.svg"
import icon5 from "../components/assets/images/Icon-5.svg"
import icon6 from "../components/assets/images/Icon-6.svg"
import icon7 from "../components/assets/images/Icon-7.svg"

const About = () => {

    const list = [
        { img: icon1, text: "Только сертифицированный товар от официальных поставщиков. Гарантийное обслуживание." },
        { img: icon2, text: "Смартфон можно купить В КРЕДИТ или В РАССРОЧКУ без процентов и переплаты. " },
        { img: icon3, text: "Постоянные Акции, Скидки и Специальные предложения. " },
        { img: icon4, text: "Бесплатная доставка по Бишкеку." },
        { img: icon5, text: "На нашем сайте вы найдёте детальное описание каждого товара, а также видеообзоры, которые помогут вам определиться с выбором. " },
        { img: icon6, text: "БОНУС при заказе смартфона онлайн! Дарим БЕСПЛАТНЫЙ скоростной интернет-трафик, наушники и пауэрбанк. " },
        { img: icon7, text: "Оперативная обратная связь по телефону 0705007000. " },
    ]


    return (
        <div>
            <div className='flex'>
                <Categories />
                <div className='flex flex-col items-center p-10 gap-2'>
                    <h3 className='text-2xl font-bold text-[#e94560]'>ИНТЕРНЕТ МАГАЗИН ALYMSTORE.KG</h3>
                    <p className='text-lg text-center'>AlymStore – интернет-магазин, у которого более 80 филиалов по всему Кыргызстану.</p> <br />
                    <p className='text-lg text-center'>В магазинах огромный выбор электронных товаров мировых брендов. Есть всё, для подключения к скоростному мобильному интернету: роутеры, винглы, семейные комплекты для дома! </p> <br />
                    <p className='text-lg text-center'>Больше 20 000 аксессуаров для мобильных устройств: кабели, переходники, адаптеры, акустические колонки и наушники, ультрамодные сумки, бананки и рюкзаки, портативные зарядки, устройства для системы «Умный дом» и многое другое.</p>

                    <div className='w-[80%] flex flex-col gap-6'>
                        {list.map((item, index) => {
                            return (
                                <p className='flex items-center gap-6' key={index}>
                                    <img className='w-[40px]' src={item.img} alt='error' />
                                    <span className='text-lg'>{item.text}</span>
                                </p>
                            )
                        })}
                    </div>
                    <p className='text-lg text-center mt-6 w-[80%]'>
                        Мы всегда рады общению с нашими Клиентами. Пишите нам, и мы с благодарностью примем ваше мнение во внимание: <a className='text-[#e94560] underline' href='mailto:alym01001@gmail.com'>alym01001@gmail.com</a>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default About;
