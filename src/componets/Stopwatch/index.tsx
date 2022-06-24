import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import { tempoParaSegundos } from '../../common/utils/time';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined,
}

export default function Stopwatch({ selecionado }: Props) {

    const [tempo, setTempo] = useState<number>();

    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}