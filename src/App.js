import React from 'react';
import GlobalStyle from './styles/global';
import { Router } from 'react-router-dom';
import history from './services/history';
import Header from "./components/header"
import Route from "./routes"

const App = () =>{

  return (
    <Router history={history}>
      <GlobalStyle/>
      <Header/>
      <Route/>
    </Router>
);
}
export default App