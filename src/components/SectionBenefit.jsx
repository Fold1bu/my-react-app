import React from "react";
import "../styles/index.css"
import img_def from "../image/benefit/def.svg"
import img_hand from "../image/benefit/hand.svg"
import img_icon from "../image/benefit/icon.svg"

const SectionBenefit = () => {
    const image = [img_def, img_hand, img_icon];
    const titleList = [
        "0 % роялти",
        "0 ₽ паушальный взнос",
        "0 % риска"
    ]
    const descList = [
        "Вы не платите обязательных ежемесячных платежей. Ваши инвестиции в стартовый пакет - это приобретение товарного ассортимента для открытия магазина теплых полов.",
        "У нас нет паушального взноса – вы бесплатно получаете опыт, который мы накопили за 10 лет работы в 80 городах России и СНГ.",
        "Мы берем на себя полное маркетинговое сопровождение наших дилеров, обучаем, сопровождаем ежедневно."
    ]

    return (
        <section className="benefit">
        <div className="container">
            <h1 className="title__benefit">С НАМИ <span>ВЫГОДНО</span></h1>

                <ul className="benefit__charter">
                    {image.map((image, index) =>
                        <li key={index} className="benefit__list">
                            <img src={image} alt="Изображение 1" />
                            <div>
                                <h3 className="title__list-benefit">{titleList[index]}</h3>
                                <p className="desc__list-benefit">{descList[index]}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};


export default SectionBenefit;