import React, {useEffect} from 'react';
import style from './Main.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getTables} from "../../redux/actions/tableAction";
import Table from "../Table/Table";

function Main() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTables());
    }, [dispatch]);

    const tables = useSelector(state => state.table);

    return (
            <div className={style.restaurant}>
                    {tables.map(item => <Table key={item.id} tableId={item.id}/>)}
            </div>
    );
}

export default Main;
