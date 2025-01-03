import React from 'react';
import "../styles/index.css"


const ListPoint = () => {
    const header_title = [
        "Полное обучение ",
        "Персональный менеджер сопровождения",
        "Рекламные инструменты",
        "Оцифровка бизнеса",
        "Стандарты работы",
        "Оптимизация работы"
    ]

    const desc = [
        "Проводим обучение Вас и сотрудников продажам, монтажу и ведению бизнеса в нашем направлении ",
        "Сопровождаем Вас по организационным вопросам, отправке ассортимента и рекламному развитию ",
        "Подготавливаем инструменты для продвижения и развития бизнеса, предоставляем доступ в базу знаний с наработками за 12 лет",
        "Прорабатываем точки роста и выход на новый уровень выручки ",
        "CRM-система, скрипты продаж, работа с партнерскими каналами и многое другое ",
        "Мониторинг работы рекламных кампаний и усиление внутренних процессов "
    ]
    return (
        <section className="partner-benefits">
            <div className='container'>
                <h1 className='title__patner'>
                    наши <span>Партнеры</span> получают
                </h1>

                <div className="point-container">
                    {header_title.map((header, index) => (
                        <div key={index} className="point-item">
                            <h1 className="title__list">{header}</h1>
                            <p className="desc__list">{desc[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListPoint;