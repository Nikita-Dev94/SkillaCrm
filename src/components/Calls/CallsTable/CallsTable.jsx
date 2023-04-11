import React from 'react'
import s from './CallsTable.module.css';
import { useSelector } from 'react-redux';
import CallsTableRow from './CallTableRow';




const CallsTable = () => {
const calls = useSelector(state=> state.calls.calls)
let callItem = calls.map(el => <CallsTableRow key={el.id} id={el.id} time={el.time}
from_number={el.from_number} source={el.source} person_avatar={el.person_avatar} type={el.in_out} date={el.date}/>)
    return (
        <div className={s.callsTable}>
            <div className={s.callsTableRow}>
                <div className={s.titleCell}>Тип</div>
                <div className={s.titleCell}>Время</div>
                <div className={s.titleCell}>Сотрудник</div>
                <div className={s.titleCell}>Звонок</div>
                <div className={s.titleCell}>Источник</div>
                <div className={s.titleCell}>Оценка</div>
                <div className={s.titleCell}>Длительность</div>
            </div>
{callItem}
        </div>
    )
}

export default CallsTable