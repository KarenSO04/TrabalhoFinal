import style from '../../../estilo/style.module.css';
import { useState } from 'react';

function Ong({id, nome, descricao}){
   
    return(
        <div >
            <ul className={style.mural}>
                <li className={style.atibutoVaga}>
                    <h2 className={style.tituloVaga}>{nome}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Descrição: {descricao}</h2>
                </li>
            </ul>
        </div>
    )
}

export default Ong;