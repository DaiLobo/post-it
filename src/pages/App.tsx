import React from 'react';
import Form from "../componets/Form";
import List from "../componets/List";
import style from './style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
