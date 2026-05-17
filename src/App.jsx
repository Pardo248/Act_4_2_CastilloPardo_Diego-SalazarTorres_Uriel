import { Routes, Route } from 'react-router-dom';

import Login from './pages/login.jsx';
import ComponentsView from './pages/componentsView.jsx';

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

    </Routes>
  );
}

export default App;