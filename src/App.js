import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import StudentInicioPage from './pages/Estudiante/Inicio';
import StudentFormularioPage from './pages/Estudiante/Formulario';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route exact path="/estudiante" component={StudentInicioPage} />
        <Route path="/estudiante/formulario" component={StudentFormularioPage} />
        {/* Faltan las rutas del dashboard, estas las estare agregando */}
      </Switch>
    </Router>
  );
};

export default App;
