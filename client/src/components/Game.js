import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import GameCompleteBox from "./GameCompleteBox";
import { Context } from "../context";
import HighScores from "./HighScores";
import About from "./About";
import Menu from "./Menu"


export default function Game() {

    const { toggleGameCompleted, showHighScores, showAbout, showMenu } = React.useContext(Context)

    return(
        <div className="game" >
            { showHighScores ? <HighScores /> : null}
            { showAbout ? <About /> : null}
            { showMenu ? <Menu /> : null}
            { toggleGameCompleted ? <GameCompleteBox /> : null}
            <div className="gameGridDisplay">
                <div className="gridsContainer">
                    <GameGrid gridNum='0' />
                    <GameGrid gridNum='1' />
                    <GameGrid gridNum='2' />
                </div>
            </div>
            <Keyboard />
        </div>
    )
}