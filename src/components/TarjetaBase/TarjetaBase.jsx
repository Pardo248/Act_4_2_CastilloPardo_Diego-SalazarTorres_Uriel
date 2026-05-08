import React from 'react';
import './TarjetaBase.css';
import Typography from '../AreaDeTexto/Typography'; 

const TarjetaBase = ({ 
  tipo = 'base', // Opciones: 'base', 'resaltada'
  titulo = 'Title', 
  texto = 'text...',
  children,
  className = ''
}) => {
  
  return (
    <div className={`tarjeta-container tarjeta-${tipo} ${className}`}>
      
      {/* Título de la tarjeta. Asignado como 'h3'*/}
      <Typography variant="title" as="h3">
        {titulo}
      </Typography>

      {/* Cuerpo de texto de la tarjeta */}
      <Typography variant="body" as="p">
        {texto}
      </Typography>

      {children}

    </div>
  );
};

export default TarjetaBase;