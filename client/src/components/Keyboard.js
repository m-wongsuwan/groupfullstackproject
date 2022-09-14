import React from "react";
import { Context } from "../context";

export default function Keyboard() {

    const {currentGuess, setCurrentGuess, currentRow, setCurrentRow, gridValues, setGridValues} = React.useContext(Context)

    function handleClick(e) {
        console.log(e.target.id)
        if (currentGuess.length < 3) {
            setCurrentGuess(prevState => prevState + e.target.id.toUpperCase())
        }
    }

    function handleDelete() {
        const toDeleteString = currentGuess
        setCurrentGuess(toDeleteString.slice(0, -1))
    }

    function handleSubmit() {
        if (currentGuess.length === 3) {
            setGridValues(prevState => {
                const newGridValues = prevState
                newGridValues[currentRow - 1] = currentGuess
                return newGridValues
            })
            setCurrentRow(prevRow => prevRow + 1)
            setCurrentGuess("")
        } else {
            alert("Guess must be on the word list and contain 3 letters.")
        }
    }

    return(
        <>
            <table className="keyboard">
                <tr>
                    <td onClick={handleClick} id="q">Q</td>
                    <td onClick={handleClick} id="w">W</td>
                    <td onClick={handleClick} id="e">E</td>
                    <td onClick={handleClick} id="r">R</td>
                    <td onClick={handleClick} id="t">T</td>
                    <td onClick={handleClick} id="y">Y</td>
                    <td onClick={handleClick} id="u">U</td>
                    <td onClick={handleClick} id="i">I</td>
                    <td onClick={handleClick} id="o">O</td>
                    <td onClick={handleClick} id="p">P</td>
                </tr>
            </table>
            <table className="keyboard">
                <tr>
                    <td onClick={handleClick} id="a">A</td>
                    <td onClick={handleClick} id="s">S</td>
                    <td onClick={handleClick} id="d">D</td>
                    <td onClick={handleClick} id="f">F</td>
                    <td onClick={handleClick} id="g">G</td>
                    <td onClick={handleClick} id="h">H</td>
                    <td onClick={handleClick} id="j">J</td>
                    <td onClick={handleClick} id="k">K</td>
                    <td onClick={handleClick} id="l">L</td>
                </tr>
            </table>
            <table className="keyboard">
                <tr>
                    <td onClick={handleSubmit} className="bigButtons" id="enter">ENTER</td>
                    <td onClick={handleClick} id="z">Z</td>
                    <td onClick={handleClick} id="x">X</td>
                    <td onClick={handleClick} id="c">C</td>
                    <td onClick={handleClick} id="v">V</td>
                    <td onClick={handleClick} id="b">B</td>
                    <td onClick={handleClick} id="n">N</td>
                    <td onClick={handleClick} id="m">M</td>
                    <td onClick={handleDelete} className="bigButtons" id="delete">DELETE</td>
                </tr>
            </table>
        </>
    )
}