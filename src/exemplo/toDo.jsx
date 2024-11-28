import React, { useEffect, useState } from "react";
import styles from "./todo.module.css";

// Função principal
export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Carrega tarefas ao montar o componente
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data.slice(0, 5)); // Exibe apenas 5 tarefas para simplificar
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTodos();
  }, []); // Array de dependências vazio para rodar apenas uma vez

  // Função para adicionar tarefa (POST)
  const addTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: newTodo || "Nova Tarefa", // Título padrão se newTodo estiver vazio
            completed: false,
          }),
        }
      );
      const newTask = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTask]);
      setNewTodo("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Função para atualizar tarefa (PUT)
  const updateTodo = async (id, updatedTitle) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: updatedTitle,
          completed: true,
        }),
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, title: updatedTitle } : todo
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  // Função para deletar tarefa (DELETE)
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Tarefas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo) => (
          <li className={styles.listItem} key={todo.id}>
            <input
              type="text"
              defaultValue={todo.title}
              onBlur={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}