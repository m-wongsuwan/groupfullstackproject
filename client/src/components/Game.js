import React from "react";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";

export default function Game() {


    return(
        <div className="game" >
            <h1>Game</h1>
            <div className="gameGridDisplay">
                <GameGrid />
                <GameGrid />
                <GameGrid />
            </div>
            <Keyboard />
        </div>
    )
}