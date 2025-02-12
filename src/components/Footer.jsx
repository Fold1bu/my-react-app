// src/components/Footer.jsx
import React from 'react';
import "../styles/index.css";
import vk from "../image/icons/VK.svg";
import whatsapp from "../image/icons/whatsapp.svg";
import youtube from "../image/icons/Youtube.svg";
import inst from "../image/icons/insta.svg";
import img from "../image/LogoFooter.svg"


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__logo">
                    <img src={img} alt="logo.img" className="logo" />
                    <p className="title__info">
                        daewoo enertec<br/>
                        Все права защищены
                        </p>
                    <p className="text__info">
                        ИП Ким Сергей Геннадьевич<br/>
                        Юр.адрес - 660135, Красноярск, Октябрьская 8а<br/>
                        ИНН: 272498786001<br/>
                        ОГРНИП: 321246800035051<br/>
                    </p>
                </div>

                <div className="document__info">
                    <h4 className="title__info_document">
                        Юридические документы
                    </h4>
                    <a href="#1" className="desc__document">Политика конфиденциальности</a>
                    <a href="#1" className="desc__document">Политика обработки персональных данных</a>
                </div>

                <div className="social_networks">
                    <h4 className='title__social'>Социальные сети</h4>
                    <div className="icon__social">
                        <a href='#1'><img src={inst} alt="" /></a>
                        <a href='#1'><img src={vk} alt="" /></a>
                        <a href='#1'><img src={youtube} alt="" /></a>
                    </div>
                    <p className="desc__social">
                        *Организация, запрещенная на территории РФ
                    </p>
                    <h4 className="title__social">
                        мессенджеры
                    </h4>
                    <a href='#1'><img src={whatsapp} alt="" className='img__whatsapp' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
