import React from 'react';

const Boton = ({ text, onClick, variant = 'primary', type = 'button' }) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors font-medium ${styles[variant]}`}
    >
      {text}
    </button>
  );
};

export default Boton;