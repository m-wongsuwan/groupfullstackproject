import React from "react";
import { Context } from "../context";
import menu from '../images/menu.svg'
    
export default function Home() {
    
    const { setShowHighScores } = React.useContext(Context)

    return(
        <nav>
        <div className='navBox'>
            <div className="navLeft">
                <img className="menuIcon" src={menu} alt="Menu" />
            </div>
            <h1 className="siteTitle">Shortdle</h1>
            <div className="navRight">
                <p style={{color: "black"}} onClick={()=> setShowHighScores(prev => !prev)}>High Scores</p>
            </div>
        </div>
      </nav>
    )
}