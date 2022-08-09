import React, {useState, useEffect} from 'react';
import style from './OnePositionInCheck.module.css'
import {getDishes} from "../../redux/actions/dishAction";
import {useDispatch, useSelector} from "react-redux";

function OnePositionInCheck({dishId, quantity}) {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const dishes = useSelector(store => store.dish);

    function dishInfo(dishes) {
        let result = 0;
        const len = dishes.length;

        for (let i=0; i<len; i++) {
            if (dishes[i].id === dishId) {
                result = [dishes[i].name, dishes[i].cost];
                return result;
            }
        }
    }

    function timer() {
        setTimeout(() => {
            setLoad(true);
        }, 1)
    }

    const nameAndCost = dishInfo(dishes);

    timer();

    return (
        <>
            {load && <ul className={style.list}>
                <li className={style.text}>{nameAndCost[0]}</li>
                <li className={style.text}>{nameAndCost[1]} р.</li>
                <li className={style.text}>{quantity} шт.</li>
            </ul>}
        </>
    );
}

export default OnePositionInCheck;
