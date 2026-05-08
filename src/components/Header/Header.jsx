import React from 'react';
import './Header.css';
import Typography from '../AreaDeTexto/Typography'; 

const Header = ({ 
  tipo = 'principal', 
  size = 'desktop',   
  titulo = 'Titulo',  
  children            
}) => {
  
  const headerClass = `header-container header-${tipo} header-${size}`;

  return (
    <header className={headerClass}>
      {/* Reemplazamos el <h1> nativo por el componente Typography.
        - Usamos as="h1" para mantener el SEO y la accesibilidad.
        - Puedes pasarle una variante (ej: "subtitle" o "aux-title") que se acerque al tamaño, 
          y además pasarle la clase "header-title" si necesitas ajustes específicos de color o margen.
      */}
      <Typography variant="aux-title" as="h1" className="header-title">
        {titulo}
      </Typography>
      
      {children}
    </header>
  );
};

export default Header;