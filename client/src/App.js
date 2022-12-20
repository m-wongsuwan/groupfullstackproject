import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
//maybe as an overlay like the high scores
import Home from './components/Home';
import Game from './components/Game';
import Nav from './components/Nav'

import { ContextProvider } from './context';



function App() {

  // This should come from context so the component can access it to close itself
  const [showHighScores, setShowHighScores] = React.useState(false)

  return (
    <ContextProvider>
      <Router>
        <Nav />
        {/* { showHighScores ? <HighScores /> : null} */}

        <Routes>
          <Route path='/' element={<Game />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/game' element={<Game />} /> */}
          {/* <Route path='/highscores' element={<HighScores />} /> */}
        </Routes>

      </Router>
    </ContextProvider>

  );
}

export default App;
