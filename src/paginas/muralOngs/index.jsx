import ListarOngs from "../../components/Lista/ong";
import listaOngs from "../../dados/ong";
import style from '../../estilo/style.module.css'; 

function MuralOngs(){

    return(
        <>
            <h1 className={style.tituloPaginas}>Mural de ONGs</h1>
            <ListarOngs ongs={listaOngs} />
        </>
    )
}

export default MuralOngs;