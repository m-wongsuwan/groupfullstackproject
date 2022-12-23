import React, { useEffect } from "react";
import { Context } from "../context";

export default function Keyboard() {

    const {
        currentGuess,
        setCurrentGuess, 
        currentRow, 
        setCurrentRow, 
        answers, 
        gridValues, 
        setGridValues, 
        wordList, 
        count, 
        setCount,
        setToggleGameCompleted,
        showMenu,
        anyAnswerContainsLetter,
        letterAppearsInAGuess
    } = React.useContext(Context)


    const theAlphabet = ['a', 'b', 'c', 'd' , 'e' , 'f' , `g` , `h` , `i` , `j` , `k` , `l` , `m` , `n` , `o` , `p` , `q` , `r` , `s` , `t` , `u` , `v` , `w` , `x` , `y` , `z`]

    const absentStyle = {backgroundColor: "rgb(55, 55, 55)"}
    const correctStyle = {backgroundColor: "rgb(79, 173, 96)"}

    

    

    function keyCell(letter) {
        if (anyAnswerContainsLetter(letter)) {
            if (letterAppearsInAGuess(letter)) {
                return <td style={correctStyle} onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            } else {
                return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            }
        } else if (answers[0].indexOf(letter) === -1 && answers[1].indexOf(letter) === -1 && answers[2].indexOf(letter) === -1) {
            if (letterAppearsInAGuess(letter)) {
                return <td style={absentStyle} onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            } else {
                return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            }
        } else {
            return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
        }
    }

    function handleClick(e) {
        if (currentGuess.length < 3 && count < 3) {
            setCurrentGuess(prevState => prevState + e.target.id.toUpperCase())
        }
    }

    function handleDelete() {
        const toDeleteString = currentGuess
        setCurrentGuess(toDeleteString.slice(0, -1))
    }

    useEffect(()=> {
        // this listener is made on page render and every time currentGuess changes
        document.addEventListener('keydown', detectKeyDown)
        // by including the next line of code, the duplicate listener is deleted
        // and the new listener has the updated value of currentGuess
        return ()=> document.removeEventListener('keydown', detectKeyDown)
    }, [currentGuess])
    
    function handleSubmit() {
        
        const guessIsValid = wordList.findIndex(word => word === currentGuess.toLowerCase()) > -1
        const guessIsCorrectLength = currentGuess.length === 3
        function advanceRowResetCurrentGuess(){
            setCurrentRow(prevRow => prevRow + 1)
            setCurrentGuess("")
        }
        const guessIsACorrectAnswerAndHasntBeenGuessed = answers.findIndex(word => word === currentGuess.toUpperCase()) > -1 && gridValues.findIndex(word => word === currentGuess.toUpperCase()) === -1

        // if the guess appears in word list run this
        
        if (guessIsValid) {
            if (guessIsCorrectLength) {
                advanceRowResetCurrentGuess()
            }
            // not obvious what this condition means
            // Suggestion: If not immediately obvious write a function that can provide the condition
            // guess appears in answers
                // write a function named isGuessCorrect
            // hasn't already been guessed
                // write a function named hasBeenGuessed
            if (guessIsACorrectAnswerAndHasntBeenGuessed) {
                // invoke function rather than nesting ifs
                // easier to read and understand
                setCount(prevCount => prevCount + 1)
                if (count === 2) {
                    // setCurrentRow(prevRow => prevRow + 1)
                    // setCurrentGuess("")
                    setGridValues(prevState => {
                        const newGridValues = prevState
                        newGridValues[currentRow] = currentGuess
                        return newGridValues
                    })
                    setToggleGameCompleted(true)
                }
            }
            
            setGridValues(prevState => {
                const newGridValues = prevState
                newGridValues[currentRow] = currentGuess
                return newGridValues
            })
            if (currentRow === 8) {
                setToggleGameCompleted(true)
            }
            //if the guess is 3 letters long run this

        }
    }
    const detectKeyDown = (e) => {
        if (!showMenu) {
            if (e.key === 'Enter') {
                handleSubmit()
            }
            if ( e.key === 'Backspace') {
                handleDelete()
            }
            if (currentGuess.length < 3  && theAlphabet.findIndex(letter => letter === e.key) > -1 && count < 3) {
                setCurrentGuess(prevState => prevState + e.key.toUpperCase())
            }
        }
    }

    
    
    return(
        <div className="keyboard">
            <table className="keyboardRow">                
                <tbody>
                    <tr>

                        {keyCell("Q")}
                        {keyCell("W")}
                        {keyCell("E")}
                        {keyCell("R")}
                        {keyCell("T")}
                        {keyCell("Y")}
                        {keyCell("U")}
                        {keyCell("O")}
                        {keyCell("I")}
                        {keyCell("P")}
                    </tr>
                </tbody>
            </table>

            <table className="keyboardRow">
                <tbody>
                    <tr>
                        {keyCell("A")}
                        {keyCell("S")}
                        {keyCell("D")}
                        {keyCell("F")}
                        {keyCell("G")}
                        {keyCell("H")}
                        {keyCell("J")}
                        {keyCell("K")}
                        {keyCell("L")}
                    </tr>
                </tbody>
            </table>
            <table className="keyboardRow">
                <tbody>
                    <tr>
                        <td onClick={handleSubmit} className="bigButtons" id="enter">ENTER</td>
                        {keyCell("Z")}
                        {keyCell("X")}
                        {keyCell("C")}
                        {keyCell("V")}
                        {keyCell("B")}
                        {keyCell("N")}
                        {keyCell("M")}
                        <td onClick={handleDelete} className="bigButtons" id="delete">DELETE</td>
                    </tr>
                </tbody>
            </table>
          
        </div>
    )
}