// src/components/Header.jsx
import logo from '../image/Logo.png';
import "../styles/index.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="3"><img src={logo} alt="" className="logo" /></a>
                <nav className="nav__header">
                    <ul className="list__header">
                        <li>
                            <a href="№" className="list__header-link">
                                Интернет-магазин
                            </a>
                        </li>
                        <li>
                            <a href="№" className="list__header-link">
                                Отзывы
                            </a>
                        </li>
                        <li>
                            <a href="№" className="list__header-link">
                                О компании
                            </a>
                        </li>
                        <li>
                            <a href="№" className="list__header-link">
                                Франшиза
                            </a>
                        </li>
                        <li>
                            <a href="№" className="list__header-link">
                                Блог
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header__contact">
                    <span className="number__header">
                        +7 (913) 205-06-13
                    </span>
                    <button className="btn btn__header">
                        Заказать звонок
                    </button>
                </div>
            </div>  
        </header>
    );
};

export default Header;
