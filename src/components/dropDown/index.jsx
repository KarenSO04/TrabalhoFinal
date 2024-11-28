import React from 'react';
import styles from '../../estilo/style.module.css';

const FormDropdown = ({ label, selectedValue = "", onChange, items }) => {

  if (!Array.isArray(items) || items.length === 0) {
    return <p>Nenhuma opção disponível</p>;
  }

  return (
    <div className={styles.containerDenuncia}>
      {label && <label className={styles.labelDenuncia}>{label}</label>}
      <select className={styles.selectDenuncia} value={selectedValue} onChange={onChange}>
        <option value="">Selecione uma opção</option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;
