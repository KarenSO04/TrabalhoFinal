import style from '../../../estilo/style.module.css';
import { useState } from 'react';

function Oportunidade({id, titulo, empresa, descricao, cargaHoraria, certificado}){
    const [inscrito, setInscrito] = useState(false);
    const handleInscricao = () => {
        setInscrito (true);
        alert("Inscrição realizada")
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
                    <h2>Descrição: {descricao}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Carga horária: {cargaHoraria}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Possui certificado? {certificado}</h2>
                </li>
                <button className={style.botao} onClick={handleInscricao}>
                    {inscrito ? 'Inscrito' : 'Inscrever-se' }
                </button>
            </ul>
        </div>
    )
}

export default Oportunidade;