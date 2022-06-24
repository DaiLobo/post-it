import React, { useState } from 'react';
import Form from "../componets/Form";
import List from "../componets/List";
import Stopwatch from '../componets/Stopwatch';
import { ITarefa } from '../types/tarefa';
import style from './style.module.scss';

function App() {
  const [task, setTask] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTask(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? !tarefa.selecionado : false,
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List
        task={task}
        selecionaTarefa={selecionaTarefa}
      />
      <Stopwatch/>
    </div>
  );
}

export default App;
