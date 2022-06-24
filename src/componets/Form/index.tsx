import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import style from './style.module.scss';

export default class Form extends React.Component<{setTask: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = {
        tarefa: '',
        tempo: '00:00',
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTask(tarefasAntigas => [...tarefasAntigas, {...this.state}] )
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
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
                        value={this.state.tempo}
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
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
}