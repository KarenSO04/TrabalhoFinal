import React, { useState, useEffect } from "react";
import style from "../../estilo/style.module.css";

// Função principal
export default function Curriculo() {
  const [newCurriculo, setNewCurriculo] = useState({ // Estado para um novo currículo
    id: null,
    nivelEscolaridade: "",
    habilidadesProfissionais: "",
    habilidadesInterpessoais: "",
    certificados: "",
    informacoesAdicionais: "",
  });

  const [curriculos, setCurriculos] = useState([]); // Estado para armazenar os currículos existentes

  // Função para adicionar um novo currículo
  const addCurriculo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/curriculos/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nivelEscolaridade: newCurriculo.nivelEscolaridade,
          habilidadesProfissionais: newCurriculo.habilidadesProfissionais.split(","),
          habilidadesInterpessoais: newCurriculo.habilidadesInterpessoais.split(","),
          certificados: newCurriculo.certificados.split(","),
          informacoesAdicionais: newCurriculo.informacoesAdicionais,
        }),
      });
      const data = await response.json();
      console.log("Currículo adicionado:", data);
      setCurriculos([...curriculos, data]); // Atualiza a lista de currículos com o novo
      setNewCurriculo({ // Limpa os campos após a criação
        nivelEscolaridade: "",
        habilidadesProfissionais: "",
        habilidadesInterpessoais: "",
        certificados: "",
        informacoesAdicionais: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar currículo:", error);
    }
  };

  // Função para buscar os currículos do banco de dados
  useEffect(() => {
    const fetchCurriculos = async () => {
      try {
        const response = await fetch("http://localhost:8080/curriculos");
        const data = await response.json();
        setCurriculos(data); // Atualiza o estado com os currículos
      } catch (error) {
        console.error("Erro ao buscar currículos:", error);
      }
    };
    fetchCurriculos();
  }, []);

  // Função para editar um currículo
  const handleEditClick = (curriculo) => {
    // Preenche os campos do formulário com os dados do currículo selecionado
    setNewCurriculo({
      id: curriculo.id,
      nivelEscolaridade: curriculo.nivelEscolaridade,
      habilidadesProfissionais: curriculo.habilidadesProfissionais.join(", "),
      habilidadesInterpessoais: curriculo.habilidadesInterpessoais.join(", "),
      certificados: curriculo.certificados.join(", "),
      informacoesAdicionais: curriculo.informacoesAdicionais,
    });
  };

  // Função para atualizar um currículo (PUT)
  const updateCurriculo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/curriculos/${newCurriculo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nivelEscolaridade: newCurriculo.nivelEscolaridade,
          habilidadesProfissionais: newCurriculo.habilidadesProfissionais.split(","),
          habilidadesInterpessoais: newCurriculo.habilidadesInterpessoais.split(","),
          certificados: newCurriculo.certificados.split(","),
          informacoesAdicionais: newCurriculo.informacoesAdicionais,
        }),
      });
      const data = await response.json();
      console.log("Currículo atualizado:", data);
      
      // Atualiza o currículo na lista local
      setCurriculos(curriculos.map((curriculo) =>
        curriculo.id === newCurriculo.id ? { ...curriculo, ...data } : curriculo
      ));

      // Limpa o formulário após a atualização
      setNewCurriculo({
        id: null,
        nivelEscolaridade: "",
        habilidadesProfissionais: "",
        habilidadesInterpessoais: "",
        certificados: "",
        informacoesAdicionais: "",
      });
    } catch (error) {
      console.error("Erro ao atualizar currículo:", error);
    }
  };

  // Função para deletar um currículo (DELETE)
  const deleteCurriculo = async (id) => {
    try {
      await fetch(`http://localhost:8080/curriculos/${id}`, {
        method: "DELETE",
      });
      console.log(`Currículo com ID ${id} deletado`);
      setCurriculos(curriculos.filter((curriculo) => curriculo.id !== id)); // Remove o currículo da lista local
    } catch (error) {
      console.error("Erro ao deletar currículo:", error);
    }
  };

  return (
    <div>
      <h1>Gerenciar Currículos</h1>

      {/* Formulário para adicionar ou editar um currículo */}
      <h2>{newCurriculo.id ? "Editar Currículo" : "Criar Novo Currículo"}</h2>
      <form onSubmit={(e) => { e.preventDefault(); newCurriculo.id ? updateCurriculo() : addCurriculo(); }}>
        <input
          type="text"
          value={newCurriculo.nivelEscolaridade}
          onChange={(e) => setNewCurriculo({ ...newCurriculo, nivelEscolaridade: e.target.value })}
          placeholder="Nível de Escolaridade"
          required
        />
        <input
          type="text"
          value={newCurriculo.habilidadesProfissionais}
          onChange={(e) => setNewCurriculo({ ...newCurriculo, habilidadesProfissionais: e.target.value })}
          placeholder="Habilidades Profissionais (separadas por vírgula)"
          required
        />
        <input
          type="text"
          value={newCurriculo.habilidadesInterpessoais}
          onChange={(e) => setNewCurriculo({ ...newCurriculo, habilidadesInterpessoais: e.target.value })}
          placeholder="Habilidades Interpessoais (separadas por vírgula)"
          required
        />
        <input
          type="text"
          value={newCurriculo.certificados}
          onChange={(e) => setNewCurriculo({ ...newCurriculo, certificados: e.target.value })}
          placeholder="Certificados (separados por vírgula)"
        />
        <textarea
          value={newCurriculo.informacoesAdicionais}
          onChange={(e) => setNewCurriculo({ ...newCurriculo, informacoesAdicionais: e.target.value })}
          placeholder="Informações Adicionais"
        />
        <button className={style.botao} type="submit">{newCurriculo.id ? "Atualizar Currículo" : "Adicionar Currículo"}</button>
      </form>

      {/* Lista de currículos */}
      <h2>Currículos Existentes</h2>
      <ul>
        {curriculos.map((curriculo) => (
          <li key={curriculo.id} className={style.mural}>
            <h3>{curriculo.nivelEscolaridade}</h3>
            <p><strong>Habilidades Profissionais:</strong> {curriculo.habilidadesProfissionais.join(", ")}</p>
            <p><strong>Habilidades Interpessoais:</strong> {curriculo.habilidadesInterpessoais.join(", ")}</p>
            <p><strong>Certificados:</strong> {curriculo.certificados.join(", ")}</p>
            <p><strong>Informações Adicionais:</strong> {curriculo.informacoesAdicionais}</p>

            {/* Botão para editar o currículo */}
            <button
              className={style.botao}
              onClick={() => handleEditClick(curriculo)}
            >
              Editar
            </button>

            {/* Botão para excluir o currículo */}
            <button
              className={style.botao}
              onClick={() => deleteCurriculo(curriculo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
