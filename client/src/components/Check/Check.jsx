import React, {useEffect, useState, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import style from './Check.module.css';
import {deleteDish, getCheck} from "../../redux/actions/checkAction";
import OnePositionInCheck from "../OnePositionInCheck/OnePositionInCheck";
import {getDishes} from "../../redux/actions/dishAction";
import Loader from "../Loader/Loader";

function Check() {
    const [load, setLoad] = useState(false);
    const { tableId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        tableId && dispatch(getCheck(tableId));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const dishes = useSelector(store => store.dish);
    const check = useSelector(store => store.check);

    function totalAmount(check, dishes) {
        let result = 0;
        const len = check.length;
        const lenDishes = dishes.length;

        for (let i=0; i<len; i++) {
            result = check.reduce((acc, item) => {
                for (let j=0; i<lenDishes; j++) {
                    if (item.dishId === dishes[j].id) {
                        return acc + dishes[j].cost * item.quantity;
                    }
                }
            }, 0)
        }

        return result;
    }

    const totalCheck = totalAmount(check, dishes);

    const delHandler = () => {
        dispatch(deleteDish(tableId));
    }

    function timer() {
        setTimeout(() => {
            setLoad(true);
        }, 500)
    }
    timer();

    return (
        <>
            {load ?
                <div className={style.check}>
                    <div className={style.title}>
                        <p className={style.text}>Позиция</p>
                        <p className={style.text}>Цена</p>
                        <p className={style.text}>Количество</p>
                    </div>
                    {check.map(item => <OnePositionInCheck key={item.id} dishId={item.dishId} quantity={item.quantity}/>)}
                    <p className={style.totalCheck}>Общий счет: {totalCheck}р.</p>
                    <div className={style.btns}>
                        <button onClick={delHandler} className={style.btnBack}>
                            Очистить
                        </button>
                        <button className={style.btnBack}>
                            Печать
                        </button>
                        <button onClick={() => navigate(`/table/${tableId}`)} className={style.btnBack}>
                            Назад
                        </button>
                    </div>

                </div>
            : <Loader />}
        </>
    );
}

export default Check;
