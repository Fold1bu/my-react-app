import React from "react";

const RevenuePoints = () => {
    const titleCardHeader = ["Теплые полы", "XL pipe"]
    const descText = ["Кабель, пленка, кабельный мат","как система основного отопления"]
    const descCard = 
    ["Прибыль с одного клиента.\n Среднее кол-во 20-25 сделок в месяц", 
    "Прибыль с одного клиента.\n Среднее кол-во 3-4 сделки в месяц"]
    const priceCard = ["15 000", "240 000"]
    const priceText = 
    ["Средний чек - 12 000 рублей\nМонтаж - 3 000 рублей",
    "Средний чек – 180.000 рублей\nМонтаж – 60.000 рублей"]

    return (
        <section className="revenue">
        <div className="container">
            <div className="title__revenue">
                <h1 className="title__text-revenue">ваши <span>заработки</span></h1>
                <p className="desc__text-revenue">Посмотрите пример, сколько вы сможете зарабатывать</p>
            </div>

            <div className="container__card-revenue">
                {titleCardHeader.map((header, index) => (
                    <div key={index} className="card__revenue">
                        <h1 className="title__card-revenue">{header}</h1>

                        <span className="desc__text-revenue_card">{descText[index]}</span>

                        <p className="desc__card-revenue">
                                {descCard[index].split('\n').map((line, lineIndex) => (
                                    <span key={lineIndex}>
                                        {line} <br />
                                    </span>
                                ))}
                        </p>
                        
                        <p className="price__text-revenue">
                            <span className="price">
                                {priceCard[index]}
                            </span>
                            <span className="price__text">руб/сделка</span>
                        </p>
                        <p className="price__text-footer">
                                {priceText[index].split('\n').map((line, lineIndex) => (
                                    <span key={lineIndex}>
                                        {line} <br />
                                    </span>
                                ))}
                        </p>
                    </div>
                ))}
            </div>

            <div className="footer__revenue">
                <p className="desc__text__footer-revenue">
                    Узнайте выручку и другие финансовые показатели действующих партнеров
                </p>

                <button className="btn btn__footer-revenue">
                    Получить информацию
                </button>
            </div>
        </div>
    </section>
    );
};

export default RevenuePoints;