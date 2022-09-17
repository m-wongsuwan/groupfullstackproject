import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import { Context } from "../context";

export default function Game() {

    const { answers } = React.useContext(Context)

    return(
        <div className="game" >
            <p>{answers}</p>
            <h1>Shortdle</h1>
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