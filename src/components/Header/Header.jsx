import React from 'react'
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../redux/headerSlice';
import { useEffect } from 'react';


const Header = () => {
    const dispatch = useDispatch()
    const date = useSelector(state=> state.header.date);
    useEffect(()=> {
        let options = { weekday: 'long' ,day: 'numeric', month: 'short'};
        const messyDate = new Date();
        const formatDate = new Intl.DateTimeFormat('ru-RU', options).format(messyDate)
    const clearDate = formatDate.slice(0,1).toUpperCase() + formatDate.slice(1, formatDate.length -1)
    dispatch(setDate(clearDate))
    },[date])
   
    
    return (
        <header>
            <div className={s.date}>
    {date}
            </div>
        </header>
    )
}

export default Header