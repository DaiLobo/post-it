import Item from './Item';
import style from './style.module.scss';
import { ITarefa } from '../../types/tarefa'

export default function List ({ task }: {task: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
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