import React from 'react';
import './CampoDeTexto.css';

const CampoDeTexto = ({
  tipo = 'base',
  placeholder = 'text',
  value,
  onChange,
  type = 'text',
  className = ''
}) => {

  const isDeshabilitado = tipo === 'deshabilitado';

  return (
    <div className={`campo-texto-container campo-texto-${tipo} ${className}`}>
      <input
        type={type}
        className="campo-texto-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDeshabilitado}
      />
    </div>
  );
};

export default CampoDeTexto;