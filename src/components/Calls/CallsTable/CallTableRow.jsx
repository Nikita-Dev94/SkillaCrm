import React from 'react'
import s from './CallsTable.module.css';




const CallsTableRow = (props) => {
    return (
            <div className={s.callsTableRow}>
                <div className={s.itemCell}>{props.type}</div>
                <div className={s.itemCell}>{props.date.slice(10,16)}</div>
                <div className={s.itemCell}><img src={props.person_avatar} alt="ava"/></div>
                <div className={s.itemCell}>{props.from_number}</div>
                <div className={s.itemCell}>{props.source}</div>
                <div className={s.itemCell}>Оценка</div>
                <div className={s.itemCell}>{props.time}</div>
            </div>
    )
}

export default CallsTableRow