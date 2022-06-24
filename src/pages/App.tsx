import React, { useState } from 'react';
import Form from "../componets/Form";
import List from "../componets/List";
import Stopwatch from '../componets/Stopwatch';
import { ITarefa } from '../types/tarefa';
import style from './style.module.scss';

function App() {
  const [task, setTask] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List task={task}/>
      <Stopwatch/>
    </div>
  );
}

export default App;
