import React from "react";
import { Context } from "../context";
import menu from '../images/menu.svg'
import barGraph from '../images/bar-graph.svg'
import questionIcon from '../images/help.svg'
import repeat from '../images/repeat.svg'
    
export default function Home() {
    
    const { setShowHighScores, setShowAbout, setShowMenu, reset } = React.useContext(Context)

    function showOneHideRest (string) {
        if (string === 'about') {
            setShowHighScores(false)
            setShowAbout(prev => !prev)
        }
        if (string === 'highScores') {
            setShowAbout(false)
            setShowHighScores(prev => !prev)
        }
    }

    return(
        <nav>
        <div className='navBox'>
            <div className="navLeft">
                <img className="menuIcon navIcon" src={menu} onClick={()=> setShowMenu(prev => !prev)} alt="Menu" />
                <h1 className="siteTitle">Shortdle</h1>
            </div>
            <div className="navRight">
                <img className="navIcon" src={questionIcon} alt="About" onClick={()=> showOneHideRest('about')} />
                <img className="navIcon" src={barGraph} alt="High Scores" onClick={()=> showOneHideRest('highScores')} />
                <img className="navIcon" src={repeat} alt="New Game" onClick={reset} />
            </div>
        </div>
      </nav>
    )
}