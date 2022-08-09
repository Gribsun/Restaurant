import React from 'react';
import style from './Loader.module.css';

function Loader() {
    return (
        <p className={style.load}>Loading...</p>
    );
}

export default React.memo(Loader);
