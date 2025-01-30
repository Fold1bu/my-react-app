import React from 'react';
import "../styles/index.css"; // импорт стилей для карточек

const TradeCard = ({ title, price, description, oldServices }) => {
    return (
        <div className="trade__card">
            <div>
                <h1 className="title__card-trade">
                    {title}
                    <br /><span>{price}</span>
                </h1>
                <p className="desc__card-trade">
                    {description.map((item, index) => (
                        <span key={index} className={oldServices.includes(item) ? 'old-service' : ''}>
                            {item}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
            <button className="btn btn__card-trade">
                Выбрать пакет
            </button>
        </div>
    );
};

export default TradeCard;