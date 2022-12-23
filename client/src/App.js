import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Game from './components/Game';
import Nav from './components/Nav'

import { ContextProvider } from './context';



function App() {

  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Game />} />
        </Routes>

      </Router>
    </ContextProvider>

  );
}

export default App;
