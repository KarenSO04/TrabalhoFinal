import React from 'react';
import styles from '../../estilo/style.module.css'; 

const FormTextInput = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div className={styles.containerDenuncia}>
      {label && <label className={styles.labelDenuncia}>{label}</label>}
      <input
        className={styles.selectDenuncia}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormTextInput;
