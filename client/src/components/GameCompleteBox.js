import React, { useState } from "react";
import { Context } from "../context";
import axios from "axios";

export default function GameCompleteBox() {

    const { answers, currentUser, setCurrentUser, count, userList, setUserList, reset } = React.useContext(Context)
    const [userInput, setUserInput] = useState({ userName: ""})
    const [finishedSubmit, setFinishedSubmit] = useState(false)


    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function submitToLeaderboard(name) {
        const userIndex = userList.findIndex(user => user.userName === name)
        if ( userIndex > -1) {
            // console.log("That name is in the userlist")
            const userId = userList[userIndex]._id
            const newScore = userList[userIndex].score + 1
            const newScoreObject = {score: newScore}
            axios.put(`/users/${userList[userIndex]._id}`, newScoreObject)
                .then(res => setUserList(prevUsers => prevUsers.map(user => user._id === userId ? res.data : user)))
                .catch(err => console.log(err))
        } else {
            if (name) {
                setCurrentUser(name)
                const newUserObject = {userName: name, score: 1}
                axios.post(`/users`, newUserObject)
                    .then(res => setUserList(prevList => prevList.concat([res.data])))
                    .catch(err => console.log(err))
            }
        }
        reset()
    }


    function promptNameAndSubmit() {
        if (count === 3) {
            if (currentUser) {
                return (
                    <>
                        <button onClick={()=> submitToLeaderboard(currentUser)}>Submit Win to Leaderboard</button>
                    </>
                )
            } else {
                return (
                    <>
                        <form onSubmit={()=>submitToLeaderboard(userInput.userName)}>
                            <input className="enterHandle" name="userName" placeholder="Enter Handle" value={userInput.userName} onChange={handleChange} />
                            <button>Submit to LeaderBoard</button>
                        </form>
                    </>
                )
            }
        }
    }

    return(
        <div className="gameCompleteBox">

            <div className="gameCompleteBox--answerDisplay">
                <h2>{answers[0]}</h2>
                <h2>{answers[1]}</h2>
                <h2>{answers[2]}</h2>
            </div>
                        
            {count < 3 &&
                <div className="gameCompleteBox--loss">
                    <h3>Better luck next time.</h3>

                </div>
            }
            {count === 3 &&
                <h2 className="gameCompleteBox--congrats">Congratulations{currentUser && ` ${currentUser}`}!</h2>
            }
            {promptNameAndSubmit()}
            <button onClick={reset} className="playAgainBtn">Play Again</button>
        </div>
    )
}
