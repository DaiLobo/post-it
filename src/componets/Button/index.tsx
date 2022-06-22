import { Component } from 'react';
import style from './style.module.scss'

export default class Button extends Component {
    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}