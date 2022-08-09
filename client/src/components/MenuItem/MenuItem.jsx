import React, {useState, useEffect} from 'react';
import style from './MenuItem.module.css'
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {addDish, deleteDish} from "../../redux/actions/checkAction";
import {checkDish} from "../../redux/actions/checkDishAction";

function MenuItem({id, name,cost}) {
    const { tableId } = useParams();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
       dispatch(checkDish(id));
    }, [dispatch]);

    // let sub = useSelector(store => store.checkDish);
    let sub = false;

    const addHandler = () => {
        setCount(count+1)
    }

    const putAwayHandler = () => {
        if (count !== 0) {
            setCount(count-1)
        }
    }

    const submitHandlerAdd = (event, count) => {
        event.preventDefault();
        if (count !== 0) {
            dispatch(addDish(id, count, tableId))
            setCount(0);
        }
    }

    const submitHandlerDel = (event) => {
        event.preventDefault();
        dispatch(deleteDish(id))
    }

    return (
        <div className={style.list}>
            <p className={style.oneDish}>{name}</p>
            <p className={style.oneDish}>{cost} р.</p>

            {!sub ? (<div className={style.inputAndButtons}>
                <button onClick={addHandler} className={style.btnChange}>
                    +
                </button>
                <p className={style.pCount}>{count}</p>
                <button onClick={putAwayHandler} className={style.btnChange}>
                    -
                </button>
                <form onSubmit={(event) => submitHandlerAdd(event, count)}>
                    <button type='submit' className={style.btnSub}>
                        Добавить в заказ
                    </button>
                </form>
                </div>)
                :
                (<form onSubmit={(event) => submitHandlerDel(event)}>
                    <button type='submit' className={style.btnSub}>
                        Убрать из заказа
                    </button>
                </form>)}
            </div>
    );
}

export default MenuItem;
