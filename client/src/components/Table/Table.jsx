import React from 'react';
import style from "./Table.module.css";
import {Link} from "react-router-dom";

function Table({tableId}) {

    return (
            <Link to={`/table/${tableId}`} className={style.table}>
                Стол {tableId}
            </Link>
    );
}

export default Table;
