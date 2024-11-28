import Vaga from "../../itens/vaga"
import style from '../../../estilo/style.module.css';

function ListarVagas({ vagas }){
    return<ul className={style.container}>{
        vagas.map((vag)=>(
            <Vaga id={vag.id} titulo={vag.titulo} empresa={vag.empresa} salario={vag.salario} requisitos={vag.requisitos} beneficios={vag.beneficios}/>
        ))
    }
    </ul>
} 

export default ListarVagas;