import React, { useState } from 'react';
import Item from './Item';
import style from './style.module.scss'

export default function List () {

    const [task, setTask] = useState([{
        tarefa: 'React',
        tempo: '02:00:00',
      },
      {
        tarefa: 'JavaScript',
        tempo: '01:00:00',
      },
      {
        tarefa: 'TypeScript',
        tempo: '04:00:00',
    }])

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTask([...task, {tarefa: "Estudar estado", tempo: '05:00:00'}])
            }}> Estudos do dia </h2>
            <ul>
                {task.map((item, index) => (
                    <Item
                        key={index}
                        { ...item }
                    />

                ))}
            </ul>
        </aside>
    )
}