import React, {useEffect} from 'react';
import style from './Menu.module.css';
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import {getDishes} from "../../redux/actions/dishAction";
import {useNavigate, useParams} from "react-router-dom";

function Menu() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tableId } = useParams();

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const dishes = useSelector(store => store.dish);

    return (
        <div className={style.menu}>
            <div className={style.title}>
                <p className={style.text}>Позиция</p>
                <p className={style.text}>Цена</p>
                <p className={style.text}>Количество</p>
            </div>
            <div className={style.list}>
                {dishes.map(item => <MenuItem key={item.id} id={item.id} name={item.name} cost={item.cost}/>)}
            </div>
            <button onClick={() => navigate(`/table/${tableId}`)} className={style.btnSub}>
                Закрыть меню
            </button>
        </div>
    );
}

export default Menu;
