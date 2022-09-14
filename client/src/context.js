import React, { useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [currentUser, setCurrentUser] = useState("New User")
    const [array, setArray] = useState([])
    const [object, setObject] = useState()
    const [currentGuess, setCurrentGuess] = useState("")
    const [currentRow, setCurrentRow] = useState(1)
    const [gridValues, setGridValues] = useState(["123", "456", '789', '123', '456', '789', '123', '456', '789'])

    //this will need to be changed once server route name is decided
    // React.useEffect(() => {
    //     fetch('/renameItem')
    //         .then(response => response.json())
    //         .then(data => setArray(data))
    //         .catch(err => console.log(err))
    // })

    return(
        <Context.Provider value={{
            currentUser,
            currentGuess,
            setCurrentGuess,
            currentRow,
            setCurrentRow,
            gridValues,
            setGridValues
        }}    
        >
            {props.children}
        </Context.Provider>
    )

    
}

export { Context, ContextProvider }