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
        setToggleGameCompleted
    } = React.useContext(Context)


    const theAlphabet = ['a', 'b', 'c', 'd' , 'e' , 'f' , `g` , `h` , `i` , `j` , `k` , `l` , `m` , `n` , `o` , `p` , `q` , `r` , `s` , `t` , `u` , `v` , `w` , `x` , `y` , `z`]

    // if you want the keys to change color based on guesses
    const absentStyle = {backgroundColor: "rgb(55, 55, 55)"}
    const correctStyle = {backgroundColor: "rgb(79, 173, 96)"}
    function keyCell(letter) {
        if (answers[0].indexOf(letter) > -1 || answers[1].indexOf(letter) > -1 || answers[2].indexOf(letter) > -1) {
            if (gridValues[0].indexOf(letter) > -1 || gridValues[1].indexOf(letter) > -1 || gridValues[2].indexOf(letter) > -1 || gridValues[3].indexOf(letter) > -1 || gridValues[4].indexOf(letter) > -1 || gridValues[5].indexOf(letter) > -1 || gridValues[6].indexOf(letter) > -1 || gridValues[7].indexOf(letter) > -1 || gridValues[8].indexOf(letter) > -1 ) {
                return <td style={correctStyle} onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            } else {
                return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            }
        } else if (answers[0].indexOf(letter) === -1 && answers[1].indexOf(letter) === -1 && answers[2].indexOf(letter) === -1) {
            if (gridValues[0].indexOf(letter) > -1 || gridValues[1].indexOf(letter) > -1 || gridValues[2].indexOf(letter) > -1 || gridValues[3].indexOf(letter) > -1 || gridValues[4].indexOf(letter) > -1 || gridValues[5].indexOf(letter) > -1 || gridValues[6].indexOf(letter) > -1 || gridValues[7].indexOf(letter) > -1 || gridValues[8].indexOf(letter) > -1 ) {
                return <td style={absentStyle} onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            } else {
                return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
            }
        } else {
            return <td onClick={handleClick} id={letter.toLowerCase()}>{letter}</td>
        }
    }

    // trying https://github.com/facebook/react/issues/15815 solution
//     Also you can put keyPressHandler function inside useEffect body and use setTest to getting previous state not from closure, but from second form with callback.

//   const [text, setText] = useState('');
 
//   useEffect(() => {
//     const keyPressHandler = (e) => {
//       setText((text) => text + e.key);
//     };

//     document.addEventListener('keydown', keyPressHandler);
//     return () => {
//       document.removeEventListener('keydown', keyPressHandler);
//     };
//   }, []);

    function handleClick(e) {
        if (currentGuess.length < 3 && count < 3) {
            setCurrentGuess(prevState => prevState + e.target.id.toUpperCase())
        }
    }

    function handleDelete() {
        const toDeleteString = currentGuess
        setCurrentGuess(toDeleteString.slice(0, -1))
    }

    // https://stackoverflow.com/questions/67537943/react-function-unaware-of-state-when-called-from-keydown-event
    // there's a more reacty way ^^^
    useEffect(()=> {
        // this listener is made on page render and every time currentGuess changes
        document.addEventListener('keydown', detectKeyDown)
        // by including the next line of code, the duplicate listener is deleted
        // and the new listener has the updated value of currentGuess
        return ()=> document.removeEventListener('keydown', detectKeyDown)
    }, [currentGuess])

    
    
    function handleSubmit() {
        
        const found = wordList.findIndex(word => word === currentGuess.toLowerCase())
        // if the guess appears in word list run this
        
        if (found > -1) {
            if (currentGuess.length === 3) {
                setCurrentRow(prevRow => prevRow + 1)
                setCurrentGuess("")
            }
            if (answers.findIndex(word => word === currentGuess.toUpperCase()) > -1 && gridValues.findIndex(word => word === currentGuess.toUpperCase())) {
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
                            // return alert('Congratulations! You guessed all three words')
                        }
            }
            
            setGridValues(prevState => {
                const newGridValues = prevState
                newGridValues[currentRow] = currentGuess
                return newGridValues
            })
            if (currentRow === 8) {
                setToggleGameCompleted(true)
                if (count >= 3) {
                    alert('grats')
                } else if (count > 0 && count < 3) {
                    alert('very close')
                }
                else {
                    alert('better luck next time')
                }
            }
            //if the guess is 3 letters long run this

        }
    }
    const detectKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
        if ( e.key === 'Backspace') {
            handleDelete()
        }
        if (currentGuess.length < 3  && theAlphabet.findIndex(letter => letter === e.key) > -1 && count < 3) {
            console.log('a letter was pressed')
            setCurrentGuess(prevState => prevState + e.key.toUpperCase())
        }
    }

    
    
    return(
        <>
        {console.log(answers)}
            <table className="keyboard">
                
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
            <table className="keyboard">
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
            <table className="keyboard">
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
            <h3>{count}</h3>


            
        </>
    )
}