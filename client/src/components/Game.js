import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import GameCompleteBox from "./GameCompleteBox";
import { Context } from "../context";
import HighScores from "./HighScores";


export default function Game() {

    const { toggleGameCompleted, currentUser, reset, showHighScores } = React.useContext(Context)

    return(
        <div className="game" >
            { !showHighScores ? <HighScores /> : null}
            <div className="userAndReset">
                <span>{currentUser ? `Logged in as ${currentUser}` : `Not logged in` }</span>
                <button onClick={reset} className="game--resetBtn">Reset game</button>
            </div>
            <div className="gameGridDisplay">
                <div className="gridsContainer">
                    <GameGrid gridNum='0' />
                    <GameGrid gridNum='1' />
                    <GameGrid gridNum='2' />
                </div>
            </div>
            {toggleGameCompleted ? <GameCompleteBox /> : <Keyboard />}
        </div>
    )
}