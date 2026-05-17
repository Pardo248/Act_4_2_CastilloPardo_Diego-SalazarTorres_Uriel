import React from 'react';
import './TarjetaBase.css';

const TarjetaBase = ({
  tipo = 'base',
  children,
  className = ''
}) => {

  return (
    <div className={`tarjeta-container tarjeta-${tipo} ${className}`}>
      {children}
    </div>
  );
};

export default TarjetaBase;