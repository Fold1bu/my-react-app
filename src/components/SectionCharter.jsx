import React from 'react';
import img from '../image/png/charter/img.png'
import "../styles/index.css"

const SectionCharter = () => {
    return (
        <section className="charter">
            <div className="container">
                <div className="text__desc-left">
                    <h1 className="title__section-charter">
                        Уникальный <br/><span>запатентованный продукт</span> 
                        <br/>СО СПРОСОМ В ЛЮБОЙ СЕЗОН
                    </h1>
                    <p className="text-one text-desc">
                        Электро-водяной пол <b>XL PIPE</b> 
                    </p>

                    <p className="text-two text-desc">
                        Это выгодная и более экологичная альтернатива стандартным системам отопления – твердотопливным, электрическим и газовым котлам.
                    </p>

                    <p className="text-three text-desc">
                        <b>
                            Быстрый монтаж, легкая эксплуатация и надежное корейское качество!
                        </b>
                    </p>

                    <a href="6" className="link-text">
                        <b>Больше о системе XL PIPE</b>
                    </a>
                </div>
                <img src={img} alt="" className="sertification-img" />
            </div>
        </section>
    );
};

export default SectionCharter;