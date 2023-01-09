import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import GameCompleteBox from "./GameCompleteBox";
import { Context } from "../context";
import HighScores from "./HighScores";
import About from "./About";
import Menu from "./Menu"
import Explainer from "./Explainer";

export default function Main() {

    const { toggleGameCompleted, showHighScores, showAbout, showExplainer, showMenu } = React.useContext(Context)

    return(
        <div className="game" >
            { showExplainer ? <Explainer /> : null}
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