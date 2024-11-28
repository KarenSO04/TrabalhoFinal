import style from '../../../estilo/style.module.css';
import { useState, useEffect } from 'react';

function Curriculo({ id, nome, nivelEscolaridade, habilidadesProfissionais, habilidadesInterpessoais, certificados }) {
    const [curriculos, setCurriculos] = useState([]); // Lista de currículos
    const [newCurriculo, setNovoCurriculo] = useState({
        nome: "",
        habilidadesProfissionais: "",
        habilidadesInterpessoais: "",
        certificados: null
    }); // Estado para o novo currículo

    const [file, setFile] = useState(null); // Para o arquivo de certificado

    // Função para enviar a requisição POST com o novo currículo
    const createCurriculo = async () => {
        const data = new FormData();

        // Adicionando os campos ao FormData
        data.append('nome', newCurriculo.nome);
        data.append('habilidadesProfissionais', newCurriculo.habilidadesProfissionais);
        data.append('habilidadesInterpessoais', newCurriculo.habilidadesInterpessoais);

        // Se houver um arquivo, adicionar ao FormData
        if (file) {
            data.append('certificados', file);
        }

        try {
            const response = await fetch(`http://localhost:8080/curriculos`, {
                method: 'POST',
                body: data
            });

            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                const data = await response.json();
                console.log("Currículo criado com sucesso:", data);
                // Atualizar a lista de currículos
                setCurriculos((prevCurriculos) => [...prevCurriculos, data]);
            } else {
                console.error("Erro ao criar currículo:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao enviar o currículo:", error);
        }
    };

    // Função para atualizar um currículo
    const updateCurriculo = async (id) => {
        // Logica para editar um currículo
        console.log(`Atualizar currículo com id ${id}`);
    };

    // Função para excluir um currículo
    const deleteCurriculos = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/curriculos/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setCurriculos(curriculos.filter(cur => cur.id !== id));
                console.log("Currículo excluído com sucesso");
            } else {
                console.error("Erro ao excluir currículo:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao excluir currículo:", error);
        }
    };

    useEffect(() => {
        const fetchCurriculos = async () => {
            try {
                const response = await fetch(`http://localhost:8080/curriculos`);
                const data = await response.json();
                setCurriculos(data);
            } catch (error) {
                console.error("Erro ao buscar currículos:", error);
            }
        };

        fetchCurriculos();
    }, []);

    return (
        <div>
            {/* Formulário para criação de novo currículo */}
            <h2>Criar Novo Currículo</h2>
            <input
                type="text"
                placeholder="Nome"
                value={newCurriculo.nome}
                onChange={(e) => setNovoCurriculo({ ...newCurriculo, nome: e.target.value })}
            />
            <input
                type="text"
                placeholder="Habilidades Profissionais"
                value={newCurriculo.habilidadesProfissionais}
                onChange={(e) => setNovoCurriculo({ ...newCurriculo, habilidadesProfissionais: e.target.value })}
            />
            <input
                type="text"
                placeholder="Habilidades Interpessoais"
                value={newCurriculo.habilidadesInterpessoais}
                onChange={(e) => setNovoCurriculo({ ...newCurriculo, habilidadesInterpessoais: e.target.value })}
            />
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={createCurriculo} className={style.botao}>Criar Currículo</button>

            {/* Listando currículos */}
            <ul className={style.mural}>
                {curriculos.map(cur => (
                    <li className={style.atibutoVaga} key={cur.id}>
                        <h2 className={style.tituloVaga}>{cur.habilidadesInterpessoais}</h2>
                        <button className={style.botao} onClick={() => updateCurriculo(cur.id)}>Editar</button>
                        <br />
                        <button className={style.botao} onClick={() => deleteCurriculos(cur.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Curriculo;
