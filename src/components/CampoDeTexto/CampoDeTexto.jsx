import React from 'react';
import './CampoDeTexto.css';

const CampoDeTexto = ({ 
  tipo = 'base', // 'base', 'enfocado', 'error', 'deshabilitado'
  placeholder = 'text',
  value,
  onChange,
  className = ''
}) => {
  
  const isDeshabilitado = tipo === 'deshabilitado';

  return (
    <div className={`campo-texto-container campo-texto-${tipo} ${className}`}>
      <input 
        type="text"
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