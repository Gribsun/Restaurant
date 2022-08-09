import {Route, Routes} from 'react-router-dom'
import style from './App.module.css';
import Main from "./components/Main/Main";
import Check from "./components/Check/Check";
import Menu from "./components/Menu/Menu";
import TableStatus from "./components/TableStatus/TableStatus";
import React from "react";
import Header from "./components/Header/Header";

function App() {

  return (
      <>
          <Header />
          <div className={style.wrapper}>
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/check/:tableId' element={<Check />} />
                  <Route path='/menu/:tableId' element={<Menu />} />
                  <Route path='/table/:tableId' element={<TableStatus />} />
              </Routes>
          </div>
      </>
  );
}

export default App;
