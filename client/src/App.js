import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import HighScores from './components/HighScores';
import { ContextProvider } from './context';


function App() {

  return (
    <ContextProvider>
      <Router>
        <nav>
          <div className='navBox'>
            <Link to='/'>Home</Link>
            <Link to='/game'>Game</Link>
            <Link to='/highscores'>High Scores</Link>
            <Link to='/about'>About</Link>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/game' element={<Game />} />
          <Route path='/highscores' element={<HighScores />} />
        </Routes>

      </Router>
    </ContextProvider>

  );
}

export default App;
