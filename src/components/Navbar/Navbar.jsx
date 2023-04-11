import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.svg';
const Navbar = () => {
    return (
  
            <nav className={s.nav}>
            <img className={s.logo} src={logo} alt="logo" />
            <ul className={s.list}>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink} ${s.result}`}>Итоги</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink} ${s.orders}`}>Заказы</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink} ${s.messages}`}>Сообщения</NavLink></li>
                <li className={s.item}> <NavLink to='/calls'className={navData => navData.isActive ? `${s.active} ${s.itemLink} ${s.calls}` : `${s.itemLink} ${s.calls}`}>Звонки</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.partners} `}>Контрагенты</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.documents}`}>Документы</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.performers}`}>Исполнители</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.result}`}>Отчеты</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.knowledgeBase}`}>База знаний</NavLink></li>
                <li className={s.item}> <NavLink to='/#' className={`${s.itemLink}  ${s.settings}`}>Настройки</NavLink></li>
            </ul>
            
            <div className={s.btns}>
                <button className={s.newOrder}>Добавить заказ</button>
                <button className={s.pay}>Оплата</button>
            </div>
            </nav>
    )
}

export default Navbar;
