import React from 'react';
import style from './TableStatus.module.css';

import {Link, useNavigate, useParams} from "react-router-dom";

function TableStatus() {

    const navigate = useNavigate();
    const { tableId } = useParams();

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <p>Стол {tableId}</p>
            </div>

            <Link to={`/menu/${tableId}`} className={style.mainText}>
                Меню
            </Link>

            <Link to={`/check/${tableId}`} className={style.mainText}>
                Чек
            </Link>

            <button onClick={() => navigate('/')} className={style.btnClose}>
                На главную
            </button>
        </div>
    );
}

export default TableStatus;
