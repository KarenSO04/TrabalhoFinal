import FormCadastro from '../../components/formCadastro';
import React from 'react';
import style from '../../estilo/style.module.css'; 

function Cadastro(){
    return(
        <>
            <h1 className={style.tituloPaginas}>Cadastro</h1>
            <FormCadastro />
        </>
    )
}

export default Cadastro;