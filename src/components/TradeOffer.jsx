import React from "react";
import "../styles/index.css"
import TradeCard from "./TradeCard";


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
        </div>
        
    </section>
    );
};

export default TradeOffer;