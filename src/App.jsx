import { Routes, Route } from 'react-router-dom';

import Login from './pages/login.jsx';
import ComponentsView from './pages/componentsView.jsx';
import SistemaCaptura from './pages/sistemaCaptura.jsx';


function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/components"
        element={<ComponentsView />}
      />

      <Route
        path="/sistema-captura"
        element={<SistemaCaptura />}
      />

    </Routes>
  );
}

export default App;