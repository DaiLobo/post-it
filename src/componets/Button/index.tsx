import React from 'react';
import style from './style.module.scss'

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: React.ReactNode;
}

export default function Button({ onClick, type, children }: Props)  {
    return (
        <button 
            type={type}
            className={style.botao}
            onClick={onClick}
        >
                {children}
        </button>
    )
}