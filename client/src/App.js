import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Main from './components/Main';
import Nav from './components/Nav'

import { ContextProvider } from './context';



function App() {

  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>

      </Router>
    </ContextProvider>

  );
}

export default App;
