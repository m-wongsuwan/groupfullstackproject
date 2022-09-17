import React from "react";
import { Context } from "../context";

export default function Keyboard() {

    const {currentGuess, setCurrentGuess, currentRow, setCurrentRow, answers, gridValues, setGridValues, wordList} = React.useContext(Context)

    const [count, setCount] = React.useState(0)

    function handleClick(e) {
        if (currentGuess.length < 3) {
            setCurrentGuess(prevState => prevState + e.target.id.toUpperCase())
        }
    }

    function handleDelete() {
        const toDeleteString = currentGuess
        setCurrentGuess(toDeleteString.slice(0, -1))
    }

    function endGame() {
        
    }
    function handleSubmit() {
        const found = wordList.findIndex(word => word === currentGuess.toLowerCase())
        // if the guess appears in word list run this
        setGridValues(prevState => {
            const newGridValues = prevState
            newGridValues[currentRow] = currentGuess
            return newGridValues
        })
        if (found > -1) {
            if (answers.findIndex(word => word === currentGuess.toUpperCase()) > -1 && gridValues.findIndex(word => word === currentGuess.toUpperCase())) {
                        setCount(prevCount => prevCount + 1)
            }
            if (currentRow === 2) {
                if (count === 3) {
                    alert('grats')
                } else if (count > 0 && count < 3) {
                    alert('very close')
                }
                else {
                    alert('better luck next time')
                }
            }
            //if the guess is 3 letters long run this
            if (currentGuess.length === 3) {
                setCurrentRow(prevRow => prevRow + 1)
                setCurrentGuess("")
            }
        } else {
            alert("Guess must be on the word list and contain 3 letters.")
        }
    }

    return(
        <>
            <table className="keyboard">
                <tbody>
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
                </tbody>
            </table>
            <table className="keyboard">
                <tbody>
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
                </tbody>
            </table>
            <table className="keyboard">
                <tbody>
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
                </tbody>
            </table>
            <h3>{count}</h3>
            <button onClick={()=>console.log(gridValues.findIndex(word => word === answers[0].toUpperCase()))}>gridValues.findIndex(word = word === answers[0].toUpperCase())</button>
            <button onClick={()=>console.log(gridValues.findIndex(word => word === answers[1].toUpperCase()))}>gridValues.findIndex(word = word === answers[1].toUpperCase())</button>
            <button onClick={()=>console.log(gridValues.findIndex(word => word === answers[2].toUpperCase()))}>gridValues.findIndex(word = word === answers[2].toUpperCase())</button>
            <button onClick={()=>setCount(prev => prev + 1)}>increase count</button>
            <button onClick={()=>console.log(count)}>count</button>
            
        </>
    )
}