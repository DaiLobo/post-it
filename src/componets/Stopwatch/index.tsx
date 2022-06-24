import { useEffect, useState } from 'react';
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

    useEffect(() => {
        if (selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo}/>
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}