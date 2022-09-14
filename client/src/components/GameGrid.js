import React from "react";
import { Context } from "../context";

export default function GameGrid() {

    const {currentGuess, gridValues} = React.useContext(Context)
    const { currentRow, setCurrentRow } = React.useContext(Context)

    return(
        <table className="table">
            <tr>
                <td>{currentRow === 1? currentGuess[0] : gridValues[0][0]}</td>
                <td>{currentRow === 1? currentGuess[1] : gridValues[0][1]}</td>
                <td>{currentRow === 1? currentGuess[2] : gridValues[0][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 2? currentGuess[0] : gridValues[1][0]}</td>
                <td>{currentRow === 2? currentGuess[1] : gridValues[1][1]}</td>
                <td>{currentRow === 2? currentGuess[2] : gridValues[1][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 3 ? currentGuess[0] : gridValues[2][0]}</td>  
                <td>{currentRow === 3 ? currentGuess[1] : gridValues[2][1]}</td>
                <td>{currentRow === 3 ? currentGuess[2] : gridValues[2][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 4? currentGuess[0] : gridValues[3][0]}</td>
                <td>{currentRow === 4? currentGuess[1] : gridValues[3][1]}</td>
                <td>{currentRow === 4? currentGuess[2] : gridValues[3][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 5? currentGuess[0] : gridValues[4][0]}</td>
                <td>{currentRow === 5? currentGuess[1] : gridValues[4][1]}</td>
                <td>{currentRow === 5? currentGuess[2] : gridValues[4][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 6? currentGuess[0] : gridValues[5][0]}</td>
                <td>{currentRow === 6? currentGuess[1] : gridValues[5][1]}</td>
                <td>{currentRow === 6? currentGuess[2] : gridValues[5][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 7? currentGuess[0] : gridValues[6][0]}</td>
                <td>{currentRow === 7? currentGuess[1] : gridValues[6][1]}</td>
                <td>{currentRow === 7? currentGuess[2] : gridValues[6][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 8? currentGuess[0] : gridValues[7][0]}</td>
                <td>{currentRow === 8? currentGuess[1] : gridValues[7][1]}</td>
                <td>{currentRow === 8? currentGuess[2] : gridValues[7][2]}</td>
            </tr>
            <tr>
                <td>{currentRow === 9? currentGuess[0] : gridValues[8][0]}</td>
                <td>{currentRow === 9? currentGuess[1] : gridValues[8][1]}</td>
                <td>{currentRow === 9? currentGuess[2] : gridValues[8][2]}</td>
            </tr>
            
        </table>
    )
}