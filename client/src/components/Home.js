import React, { useState } from "react";
import { Context } from "../context";
import { useNavigate } from 'react-router-dom'
    
export default function Home() {
    let navigate = useNavigate();
    
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
        navigate('/game')
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
                <br></br>
                <p>
                    Answers come from the Scrabble list of legal three-letter words.
                </p>
                <br />
                <small>Tile Icon by IBM-Design on IconScout</small>
            </div>
        </div>
    )
}