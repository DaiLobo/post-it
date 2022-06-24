import Item from './Item';
import style from './style.module.scss';
import { ITarefa } from '../../types/tarefa'

interface Props {
    task: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

export default function List ({ task, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {task.map((item, id) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        { ...item }
                    />

                ))}
            </ul>
        </aside>
    )
}