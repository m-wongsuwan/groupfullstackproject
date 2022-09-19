import React, { useEffect } from "react";
import { Context } from "../context";

export default function Keyboard() {

    const {currentGuess, setCurrentGuess, currentRow, setCurrentRow, answers, gridValues, setGridValues, wordList} = React.useContext(Context)

    const [count, setCount] = React.useState(0)

    const theAlphabet = ['a', 'b', 'c', 'd' , 'e' , 'f' , `g` , `h` , `i` , `j` , `k` , `l` , `m` , `n` , `o` , `p` , `q` , `r` , `s` , `t` , `u` , `v` , `w` , `x` , `y` , `z`]

    // console.log(theAlphabet.findIndex(letter => letter === 'a'))
    // console.log(theAlphabet.findIndex(letter => letter === 'q'))
    // console.log(theAlphabet.findIndex(letter => letter === 'g'))
    // console.log(theAlphabet.findIndex(letter => letter === 'd'))

    function handleClick(e) {
        if (currentGuess.length < 3) {
            setCurrentGuess(prevState => prevState + e.target.id.toUpperCase())
        }
    }

    function handleDelete() {
        const toDeleteString = currentGuess
        setCurrentGuess(toDeleteString.slice(0, -1))
    }

    // function endGame() {
        
    // }

    // useEffect(()=> {

    // }, [currentGuess])

    const detectKeyDown = (e) => {
        console.log(e.key)
        if (e.key === '`') {
            console.log(count)
        }
        if (e.key === 'Enter') {
            console.log(currentGuess)
            handleSubmit()
        }
        if ( e.key === 'Backspace') {
            handleDelete()
        }
        if (currentGuess.length < 3 && theAlphabet.findIndex(letter => letter === e.key) > -1 ) {
            setCurrentGuess(prevState => prevState + e.key.toUpperCase())
        }
    }

    document.addEventListener('keydown', detectKeyDown)
    
    function handleSubmit() {
        console.log(currentGuess)
        const found = wordList.findIndex(word => word === currentGuess.toLowerCase())
        // if the guess appears in word list run this
        
        if (found > -1) {
            setGridValues(prevState => {
                const newGridValues = prevState
                newGridValues[currentRow] = currentGuess
                return newGridValues
            })
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
            <button onClick={()=>console.log(currentGuess)}>currentGuess</button>
            <button onClick={()=>console.log(currentGuess.length)}>currentGuess.length</button>
            <button onClick={()=>console.log(wordList)}>wordList</button>
            <button onClick={()=>console.log(gridValues)}>gridValues</button>
            <button onClick={()=>console.log(currentGuess.toLowerCase())}>currentGuess.toLowerCase</button>
            
        </>
    )
}