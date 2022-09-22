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
            reset
        }}    
        >
            {props.children}
        </Context.Provider>
    )

    
}

export { Context, ContextProvider }