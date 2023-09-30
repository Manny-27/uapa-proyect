import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import StudentInicioPage from './pages/Estudiante/Inicio';
import StudentFormularioPage from './pages/Estudiante/Formulario';
import Admin_dashboard from './pages/Dashboard_admin/Admin_dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route exact path="/estudiante" component={StudentInicioPage} />
        <Route path="/estudiante/formulario" component={StudentFormularioPage} />
        <Route exact path="/dashboard" component={Admin_dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
