import React, { useState } from 'react';
import style from '../../estilo/style.module.css';

function FormCadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        endereco: '',
        telefone: '',
        dataNascimento: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Jovem cadastrado com sucesso!");
                setFormData({
                    nome: '',
                    cpf: '',
                    email: '',
                    senha: '',
                    endereco: '',
                    telefone: '',
                    dataNascimento: '',
                });
            } else {
                alert("Ocorreu um erro ao cadastrar o jovem.");
                console.error("Erro no envio dos dados:", response.statusText);
            }
        } catch (error) {
            alert("Erro ao se conectar com o servidor.");
            console.error("Erro ao adicionar jovem:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.formCurriculo}>
            <div className="form-group">
                <label className={style.label} htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="endereco">Endereço:</label>
                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label className={style.label} htmlFor="dataNascimento">Data de nascimento:</label>
                <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className={style.botao} type="submit">Enviar</button>
        </form>
    );
}

export default FormCadastro;
