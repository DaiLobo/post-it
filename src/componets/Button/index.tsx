import React from 'react';
import style from './style.module.scss'

export default class Button extends React.Component<{type?: 'button' | 'submit' | 'reset' | undefined}> {
    render() {
        const { type = 'button' } = this.props;
        return (
            <button type={type} className={style.botao}>
                 {this.props.children}
            </button>
        )
    }
}