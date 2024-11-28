import Curriculo from "../../itens/curriculo"
import style from '../../../estilo/style.module.css';

function ListarCurriculos({ curriculo }){
    return<ul className={style.container}>{
        curriculo.map((cr, index)=>(
            <Curriculo key={index} id={cr.id} nome={cr.nome} nivelEscolaridade={cr.nivelEscolaridade}  habilidadesProfissionais={cr. habilidadesProfissionais}  habilidadesInterpessoais={cr. habilidadesInterpessoais} certificado={cr.certificado}/>
        ))
    }
    </ul>
} 

export default ListarCurriculos;
