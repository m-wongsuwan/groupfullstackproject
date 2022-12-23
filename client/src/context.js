import React, { useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [currentUser, setCurrentUser] = useState("")
    const [currentGuess, setCurrentGuess] = useState("")
    const [currentRow, setCurrentRow] = useState(0)
    const [gridValues, setGridValues] = useState(["   ", "   ", '   ', '   ', '   ', '   ', '   ', '   ', '   '])
    const [answers, setAnswers] = useState(['', '', ''])
    const [wordList, setWordList] = useState([])
    const [count, setCount] = React.useState(0)
    const [toggleGameCompleted,  setToggleGameCompleted] = useState(false)
    const [userList, setUserList] = useState([])

    const [showHighScores, setShowHighScores] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    function reset() {
        setCurrentGuess("")    
        setCurrentRow(0)
        setGridValues(["   ", "   ", '   ', '   ', '   ', '   ', '   ', '   ', '   '])
        newAnswers()
        setCount(0)
        setToggleGameCompleted(false)
    }

    React.useEffect(()=>{
        fetch('/users')
            .then(response => response.json())
            .then(data => setUserList(data))
            .catch(err => console.log(err))
    }, [])

    function newAnswers() {
        fetch('/wordlist')
            .then(response => response.json())
            .then(data => {
                setWordList(data[0].wordArray)
                const wordOne = data[0].wordArray[Math.floor(data[0].wordArray.length * Math.random())]
                const wordTwo = data[0].wordArray[Math.floor(data[0].wordArray.length * Math.random())]
                const wordThree = data[0].wordArray[Math.floor(data[0].wordArray.length * Math.random())]
                setAnswers([wordOne.toUpperCase(), wordTwo.toUpperCase(), wordThree.toUpperCase()])
            })
            // .then(data => console.log(data[0].wordArray))
            .catch(err => console.log(err))
    }


    React.useEffect(() => {
        newAnswers()
    }, [])

    function anyAnswerContainsLetter(letter) {
        return answers[0].indexOf(letter) > -1 || answers[1].indexOf(letter) > -1 || answers[2].indexOf(letter) > -1
    }

    function letterAppearsInAGuess(letter){
        return gridValues[0].indexOf(letter) > -1 || gridValues[1].indexOf(letter) > -1 || gridValues[2].indexOf(letter) > -1 || gridValues[3].indexOf(letter) > -1 || gridValues[4].indexOf(letter) > -1 || gridValues[5].indexOf(letter) > -1 || gridValues[6].indexOf(letter) > -1 || gridValues[7].indexOf(letter) > -1 || gridValues[8].indexOf(letter) > -1
    }



    return(
        <Context.Provider value={{
            currentUser,
            setCurrentUser,
            currentGuess,
            setCurrentGuess,
            currentRow,
            setCurrentRow,
            gridValues,
            setGridValues,
            answers,
            wordList,
            count,
            setCount,
            toggleGameCompleted,
            setToggleGameCompleted,
            userList,
            setUserList,
            reset,
            showHighScores,
            setShowHighScores,
            showAbout,
            setShowAbout,
            showMenu,
            setShowMenu,
            anyAnswerContainsLetter,
            letterAppearsInAGuess
        }}    
        >
            {props.children}
        </Context.Provider>
    )

    
}

export { Context, ContextProvider }