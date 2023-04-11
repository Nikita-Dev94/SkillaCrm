import React, { useEffect } from 'react'
import s from './Calls.module.css';
import { getCalls } from '../../api';
import { useDispatch } from 'react-redux';
import { setCalls } from '../../redux/callsSlice';
import Balance from './Balance/Balance';
import CallsTable from './CallsTable/CallsTable';



const Calls = () => {
    const dispatch = useDispatch();
    let dateStart = '2023-04-09',
    dateEnd = '2023-04-11',
    inOut = '';
    useEffect(()=> {
        const getCallsResult = async ()=> {
            const data = await getCalls(dateStart, dateEnd, inOut);
            dispatch(setCalls(data))
        }
        getCallsResult()
    },[dateStart, dateEnd, inOut])
    return (
              <div className={s.callsWrapper}>
                <div className={s.top}>
                    <Balance/>
                </div>
                <div className={s.searchAndFilters}>
                    <button className={s.searchBtn}>Поиск по звонкам</button>
                    <div className={s.filters}>
                        фильтры
                    </div>
                    
                </div>
                <CallsTable/>
            </div>
     
    )
}

export default Calls