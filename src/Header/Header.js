import s from './Header.module.css';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <Link className={s.link} to="/">Главная страница</Link>
            <Link className={s.link} to="/about">О компании</Link>
            <Link className={s.link} to="/test">Test Api Request</Link>
        </div>
    );
};
