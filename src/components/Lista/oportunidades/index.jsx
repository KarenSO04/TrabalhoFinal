import Oportunidade from "../../itens/oportunidade"
import style from '../../../estilo/style.module.css';

function ListarOportunidades({ oportunidade }){
    return<ul className={style.container}>{
        oportunidade.map((op)=>(
            <Oportunidade id={op.id} titulo={op.titulo} empresa={op.empresa} descricao={op.descricao} cargaHoraria={op.cargaHoraria} certificado={op.certificado}/>
        ))
    }
    </ul>
} 

export default ListarOportunidades;