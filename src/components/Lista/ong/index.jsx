import Ong from "../../itens/ong";
import style from '../../../estilo/style.module.css';

function ListarOngs({ ongs }) {
    return (
        <ul className={style.container}>
            {ongs.map((og) => (
                <li key={og.id}> 
                    <Ong id={og.id} nome={og.nome} descricao={og.descricao} /> 
                </li>
            ))}
        </ul>
    );
}

export default ListarOngs;
