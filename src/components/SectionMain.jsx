// src/components/Section.jsx
import React from 'react';
import "../styles/index.css"

const SectionMain = () => {
  return (
    <div>
      <main className="main">
        <div className="container">
            <div className="main__text">
                <h1 className="title__main">
                    Зарабатывайте на продаже теплых полов <br /> с маржинальностью до 100%<br /> уже в первый месяц 
                </h1>

                <ul className="list__main">
                    <li>- Один партнер в одном городе </li>
                    <li>- Среднемесячный оборот наших партнеров <b>1.000.000р</b> в месяц </li>
                    <li>- Проверенная бизнес-модель с 2010 года </li>
                    <li>- Работает <b>более 80 партнеров</b> по России и СНГ</li>
                </ul>

                <button className="btn btn__main">
                    ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ + БИЗНЕС-ПЛАН
                </button>
            </div>
        </div>
    </main>
    </div>
  );
};

export default SectionMain;
