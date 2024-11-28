import ListarOportunidades from "../../components/Lista/oportunidades";
import listaOportunidades from "../../dados/oportunidade";
import style from '../../estilo/style.module.css'; 

function MuralOportunidades(){
    return(
        <>
            <h1 className={style.tituloPaginas}>Mural de oportunidades</h1>
            <ListarOportunidades oportunidade={listaOportunidades} />
        </>
    )
}

export default MuralOportunidades;