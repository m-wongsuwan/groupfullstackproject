import React, { useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [currentUser, setCurrentUser] = useState("")
    const [array, setArray] = useState([])
    const [object, setObject] = useState()
    const [currentGuess, setCurrentGuess] = useState("")
    const [currentRow, setCurrentRow] = useState(0)
    const [gridValues, setGridValues] = useState(["   ", "   ", '   ', '   ', '   ', '   ', '   ', '   ', '   '])
    const [answers, setAnswers] = useState(['', '', ''])
    const [wordList, setWordList] = useState([])
    const [count, setCount] = React.useState(0)

    //this will need to be changed once server route name is decided
    React.useEffect(() => {
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
            setCount
        }}    
        >
            {props.children}
        </Context.Provider>
    )

    
}

export { Context, ContextProvider }