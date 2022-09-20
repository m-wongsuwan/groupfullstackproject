import React, { useState } from "react";
import { Context } from "../context";


export default function Home() {
    
    const { currentUser, setCurrentUser } = React.useContext(Context)
    const [userInput, setUserInput] = useState({ userName: ""})

    function handleChange(e) {
        const { name, value } = e.target

        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        setUserInput({ userName: userInput.userName })
        setCurrentUser(userInput.userName)
    }

    return(
        <div className="home">
            <h1>Welcome {currentUser}</h1>
            <form onSubmit={handleSubmit}>
                <input name="userName" placeholder="Enter Handle" value={userInput.userName} onChange={handleChange} />
                <button>Log In</button>
                
            </form>
            <h2>What is Shortdle?</h2>
            <div className="about">
                <p>
                    Shortdle is a word game that tests your powers of deduction and knowledge of English.
                </p>
                <br></br>
                <p>
                    You'll have nine guesses to guess three three-letter words. Every time you complete a Shortdle in nine guesses or less, you get a point on the leaderboard!
                </p>
            </div>
        </div>
    )
}