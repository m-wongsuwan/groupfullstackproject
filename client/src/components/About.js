import React from "react";
import { Context } from "../context";
import x from '../images/x-circle-black.svg'


export default function About() {

    const { setShowAbout } = React.useContext(Context)

    return(
        <div className="about infoPopUp">
            <img onClick={()=> setShowAbout(prev => !prev)} className="exitIcon" src={x} alt="X" />
            <h1 className="popUpH1">About</h1>
            <p>
                    Shortdle is a word game that tests your powers of deduction and knowledge of English.
                </p>
                <br></br>
                <p>
                    You'll have nine guesses to guess three three-letter words. Every time you complete a Shortdle in nine guesses or less, you get a point on the leaderboard!
                </p>                
                <br></br>
                <p>
                    Answers come from the Scrabble list of legal three-letter words.
                </p>
                <br />
                <small>Tile Icon by IBM-Design on IconScout 
                <br />
                <a href="https://iconscout.com/icons/x-circle" target="_blank" rel="noreferrer">X Circle Icon</a> by <a href="https://iconscout.com/contributors/phosphoricons" target="_blank" rel="noreferrer">Phosphor Icons</a>
                <br />
                <a href="https://iconscout.com/icons/menu" target="_blank" rel="noreferrer">Menu Icon</a> by <a href="https://iconscout.com/contributors/rengised" rel="noreferrer">Alex Martynov</a> on <a href="https://iconscout.com">IconScout</a>
                <br />
                <a href="https://iconscout.com/icons/bar-graph" target="_blank" rel="noreferrer">Bar Graph Icon</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank" rel="noreferrer" >Unicons Font</a>
                <br />
                <a href="https://iconscout.com/icons/help" target="_blank" rel="noreferrer">Help Icon</a> by <a href="https://iconscout.com/contributors/fluent">Microsoft</a> on <a href="https://iconscout.com">IconScout</a></small>
        </div>
    )
}