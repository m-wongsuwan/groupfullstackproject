import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import GameCompleteBox from "./GameCompleteBox";
import { Context } from "../context";


export default function Game() {

    const { toggleGameCompleted, userList, currentUser } = React.useContext(Context)

    return(
        <div className="game" >
            <h1>Shortdle</h1>
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