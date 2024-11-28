import ListarVagas from "../../components/Lista/vagas";
import listaVagas from "../../dados/vaga"
import style from '../../estilo/style.module.css'; 

function MuralVagas(){
    return(
        <>
            <h1 className={style.tituloPaginas}>Mural de Vagas</h1> 
            <ListarVagas vagas={listaVagas} />
        </>
    )
}

export default MuralVagas;