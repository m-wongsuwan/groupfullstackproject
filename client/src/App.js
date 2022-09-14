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
          <Link to='/'>Home</Link>
          <Link to='/game'>Game</Link>
          <Link to='/highscores'>High Scores</Link>
          <Link to='/about'>About</Link>
          <select>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
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
