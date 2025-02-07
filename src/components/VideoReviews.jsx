import React from "react";
import "../styles/index.css"
import img from "../image/reviews/video.png"
import imgStar from "../image/svg/Star.svg"
import imgArrowLeft from "../image/svg/ArrowLeft.svg"
import imgArrowRight from "../image/svg/ArrowRight.svg"


const VideoReviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <h1 className="title__reviews">
                    Выбор <span>партнеров</span>
                </h1>

                <div className="video__reviews">
                
                    <div className="left__video-reviews">
                        <img src={img} alt=""/>
                    </div>

                    <div className="right__text-reviews">
                        <h3 className="title__reviews-right">
                            Отзыв от официального дилера DAEWOO ENERTEC в Иркутске.
                        </h3>

                        <div className="stars__reviews-group">
                            <img src={imgStar} alt="" className="stars"/>
                            <p className="review__number">4.6</p>
                            <p className="name__review">Ольга Середницкая</p>
                        </div>

                        <p className="review__text">
                            Ольга Середницкая расскажет о том, 
                            как приняла решение стать дилером, 
                            о продаже и спросе на уникальный электро-водяной 
                            теплый пол XL PIPE в Иркутске. Поделится инструментами, 
                            которые ей дает центральный офис для развития, а также 
                            подробно остановится на системе поддержки отдела сопровождения 
                            дилерства по теплым полам.
                        </p>

                        <button className="arrow__reviews">
                            <img src={imgArrowLeft} alt=""/>
                            <img src={imgArrowRight} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoReviews;