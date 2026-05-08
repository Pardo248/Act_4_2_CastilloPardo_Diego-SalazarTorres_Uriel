import React from 'react';
import './Typography.css'; // Se importa el CSS para los estilos 

const Typography = ({ 
  variant = 'body', 
  as,               
  children, 
  className = '' 
}) => {
  
  // Mapa para definir qué etiqueta HTML usar por defecto según la variante
  const defaultTags = {
    'featured-title': 'h1',
    'title': 'h2',
    'subtitle': 'h3',
    'aux-title': 'h4',
    'body-primary': 'p',
    'body': 'p',
  };

  // Determinar la etiqueta a renderizar (usa 'as' si se provee, si no, usa el default, si no, 'span')
  const Component = as || defaultTags[variant] || 'span';

  // Combinar las clases: la prefijada con 'text-' + la variante + clases adicionales
  const combinedClassName = `text-${variant} ${className}`.trim();

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};

export default Typography;