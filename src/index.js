import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // importa o componente App com as rotas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Aqui você monta as rotas dentro do App */}
  </React.StrictMode>
);
