import React from "react";
import "../styles/index.css";

const FormFooter = () => {
    return (
        <section className="form__footer">
            <div className="container">
                <div className="text__left__form">
                    <h1 className="title__left">
                        Остались вопросы?
                    </h1>
                    <p className="desc__form">
                        Также вы можете напрямую связаться с нами или с уже действующими партнерами, чтобы задать все вопросы
                    </p>
                </div>

                <form action="" className="form" method="post" >
                    <input className="form__holder" id="name" type="text" placeholder="Ваше имя" />
                    <input className="form__holder" id="number" type="number" placeholder="Ваш телефон" />
                    <button className="btn__form">
                        Получить контакты действующих партнеров
                    </button>
                    <p className="small-text">*Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>
                </form>

                <div className="text__right__form">
                    <p className="desc__form">
                        Связаться с менеджером сопровождения
                    </p>
                    <a href="tel:+79132050613" className="call-button">+7 (913) 205-06-13</a>
                </div>
            </div>
    </section>
    );
};

export default FormFooter;