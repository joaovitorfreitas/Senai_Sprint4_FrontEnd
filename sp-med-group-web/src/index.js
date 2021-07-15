import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Login from './pages/Login/Login';
import Notfound from './pages/NotFound/NotFound';
import cadastro from './pages/Cadastro/cadastrar';
import Descricao from './pages/Descricao/descricao'
import Listar from './pages/Listar/Listar'

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path = "/login" component={Login}/>
        <Route path = "/cadastro" component={cadastro}/>
        <Route path = "/descricao" component={Descricao}/>
        <Route path = "/Listar" component={Listar}/>
        <Route Redirect to = "/NotFound" component={Notfound}/>
      </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
