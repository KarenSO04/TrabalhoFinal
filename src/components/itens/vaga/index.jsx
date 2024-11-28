import style from '../../../estilo/style.module.css';
import { useState } from 'react';

function Vaga({id, titulo, empresa, salario, requisitos, beneficios}){
    const [inscrito, setInscrito] = useState(false);
    const handleInscricao = () => {
        setInscrito (true);
        alert("Currículo enviado!")
    }
    return(
        <div >
            <ul className={style.mural}>
                <li className={style.atibutoVaga}>
                    <h2 class={style.tituloVaga}>{titulo}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Empresa: {empresa}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Salário: {salario}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Requisitos: {requisitos}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Benefícios: {beneficios}</h2>
                </li>
                <button className={style.botao} onClick={handleInscricao}>
                    {inscrito ? 'Inscrito' : 'Inscrever-se' }
                </button>
            </ul>
        </div>
    )
}

export default Vaga;