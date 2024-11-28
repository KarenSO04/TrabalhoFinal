import FormCurriculo from '../../components/formularioCurriculo'
import React from 'react';
import style from '../../estilo/style.module.css'; 

function MeuCurriculo(){
    return(
        <>
            <h1 className={style.tituloPaginas}> Meu Currículo</h1>
            <FormCurriculo />
            
           
        </>
    )
}

export default MeuCurriculo;