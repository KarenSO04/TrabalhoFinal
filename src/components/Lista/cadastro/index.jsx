import style from '../../../estilo/style.module.css';
import { useState } from 'react';

function Cadastro({id, nome, email, senha, cpf, endereco, telefone, dataNasicmento}){
    const [inscrito, setInscrito] = useState(false);
    const handleInscricao = () => {
        setInscrito (true);
        alert("Cadastro realizado")
    }
    return(
        <div >
            <ul className={style.mural}>
                <li className={style.atibutoVaga}>
                    <h2 class={style.tituloVaga}>{nome}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>CPF: {cpf}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Email: {email}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Senha: {senha}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Telefone: {telefone}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Endereço: {endereco}</h2>
                </li>
                <li className={style.atibutoVaga}>
                    <h2>Data de Nascimento: {dataNasicmento}</h2>
                </li>
                <button className={style.botao} onClick={handleInscricao}>
                    {inscrito ? 'Inscrito' : 'Inscrever-se' }
                </button>
            </ul>
        </div>
    )
}

export default Cadastro;