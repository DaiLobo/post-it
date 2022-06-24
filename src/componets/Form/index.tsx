import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTask: React.Dispatch<React.SetStateAction<ITarefa[]>>
}
export default function Form ({ setTask }: Props) {
    
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); //para não atualizar a página após dá submit
        setTask(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]
        );
        setTarefa('');
        setTempo('00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input 
                    type='text'
                    name='tarefa'
                    id='tarefa'
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                    placeholder='O que você quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type='time'
                    step='1'
                    name='tempo'
                    value={tempo}
                    onChange={event => setTempo(event.target.value)}
                    id='tempo'
                    min='00:00:00'
                    max='18:00:00'
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}