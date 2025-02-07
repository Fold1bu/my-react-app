import React from "react";
import "../styles/index.css"
import TradeCard from "./TradeCard";
import img from '../image/svg/Line 2.svg'


const TradeOffer = () => {
    const offers = [
        {
            title: 'Пакет 1',
            price: '350.000',
            description: [
                '- Продукция на стоимость пакета',
                '- Скидка на продукцию до 45%',
            ],
            oldServices: [],
        },
        {
            title: 'Пакет 2',
            price: '400.000',
            description: [
                '- Продукция на стоимость пакета',
                '- Скидка на продукцию до 49%',
                '- Печатные рекламные материалы (БЕСПЛАТНО)',
                '- Демонстрационный стенд с образцами',
            ],
            oldServices: ['- Продукция на стоимость пакета', '- Скидка на продукцию до 49%'], // старая услуга
        },
        {
            title: 'Пакет 3',
            price: '500.000',
            description: [
                '- Продукция на стоимость пакета',
                '- Скидка на продукцию до 49%',
                '- Печатные рекламные материалы (БЕСПЛАТНО)',
                '- Демонстрационный стенд с образцами',
                '- 2 дня обучения в центральном офисе',
                '- Бонус на размещение онлайн рекламы',
            ],
            oldServices: ['- Продукция на стоимость пакета', '- Скидка на продукцию до 49%', '- Печатные рекламные материалы (БЕСПЛАТНО)', '- Демонстрационный стенд с образцами'], // старая услуга
        },
    ];

    return (
    <section className="trade">
        <div className="container">
            <h1 className="title__trade"><span>НЕОБХОДИМЫЕ ВЛОЖЕНИЯ </span>НА СТАРТЕ</h1>

            <div className="trade__wrapper">
                {offers.map((offer, index) => (
                    <TradeCard
                        key={index}
                        title={offer.title}
                        price={offer.price}
                        description={offer.description}
                        oldServices={offer.oldServices} // передача старых услуг
                    />
                ))}
            </div>

            <div className="trade__points">
                <h1 className="title__points-trade">
                    Помимо приобретения пакета, вам необходимы
                </h1>

                <ul className="list__points-trade">
                    <li className="list__points-text"><img src={img} alt="" />Офис продаж от 25 кв.м </li>
                    <li className="list__points-text"><img src={img} alt="" />Косметический ремонт в офисе</li>
                    <li className="list__points-text"><img src={img} alt="" />Организация рабочих мест</li>
                    <li className="list__points-text"><img src={img} alt="" />Рекламный бюджет на 1-2 месяца</li>
                </ul>

                <button className="btn btn__points-trade">Скачать дилерский договор</button>
            </div>
            
        </div>
    </section>
    );
};

export default TradeOffer;