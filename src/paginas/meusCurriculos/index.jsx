import ListarCurriculos from "../../components/Lista/curriculos2";
// import listaCurriculos from "../../dados/curriculo";
import style from '../../estilo/style.module.css';
import React, { useState, useEffect } from 'react'; // Verifique se está importando o React e os hooks necessários

function MeusCurriculos(){

    const [curriculo, setCurriculo] = useState(null);
// const [newCurriculo, setNovoCurriculo] = useState("");

// const data = new FormData();
// // data.append('nome', formData.nome);
// data.append('habilidadesProfissionais', formData.habilidadesProfissionais);
// data.append('habilidadesInterpessoais', formData.habilidadesInterpessoais);
// if (file) {
//     data.append('certificados', file);
// }
useEffect(() => {
  const fetchCurriculos = async () => {
    // setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/curriculos/3`);
      const data = await response.json();
      setCurriculo(data); 
    } catch (error) {
      console.error("Erro ao buscar currículos:", error);
    } finally {
    //   setLoading(false);
    }
  };

  fetchCurriculos();
}, []); 



    return(
        <>
            <h1 className={style.tituloPaginas}>Meus currículos</h1>
            <p>"id":{curriculo?.id}</p>
            <p>Nivel de escolaridade:{curriculo?.nivelEscolaridade}</p>
            <p>Habilidades profissionais:{curriculo?.habilidadesProfissionais}</p>
            <p>Habilidades interpessoais:{curriculo?.habilidadesInterpessoas}</p>
            <p>Informações adicionais:{curriculo?.informacoesAdicionais}</p>
        </>
    )
}

export default MeusCurriculos;