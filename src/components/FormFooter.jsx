import React, { useState } from 'react';
import "../styles/index.css";

const FormFooter = () => {
    const [user_name, setName] = useState('');
    const [user_number, setNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Остановить стандартное поведение формы

        try {
            const response = await fetch('http://localhost:8080/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Здесь мы указываем, что отправляем JSON
                },
                body: JSON.stringify({
                    user_name: user_name,
                    user_number: user_number
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.text();
            console.log(data); // Обработка ответа от сервера
            
            // Успешная отправка данных
            setSuccessMessage("Ваши данные успешно отправлены!");
            setErrorMessage('');

            // Очистка формы после успешной отправки
            setName('');
            setNumber('');
        } catch (error) {
            console.error('Ошибка:', error);
            setErrorMessage('Произошла ошибка при отправке данных, попробуйте еще раз.');
            setSuccessMessage('');
        }
    };

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

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form__holder"
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        value={user_name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className="form__holder"
                        id="number"
                        type="tel"
                        placeholder="Ваш телефон"
                        value={user_number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    <button className="btn__form" type="submit">
                        Получить контакты действующих партнеров
                    </button>
                    <p className="small-text">*Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
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
