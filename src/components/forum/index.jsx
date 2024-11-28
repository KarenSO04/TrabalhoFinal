import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; 
import style from '../../estilo/style.module.css'; 

function Forum() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setComments([...comments, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite seu comentário"
        />
        <button className={style.botao} type="submit">Enviar</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className={style.comentario}>
            <FaUser className={style.iconeUsuario} />
            <span>{comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;