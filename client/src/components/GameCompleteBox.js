import React, { useState } from "react";
import { Context } from "../context";
import axios from "axios";
import x from '../images/x-circle-black.svg'

export default function GameCompleteBox() {

    const { 
            answers, 
            currentUser, 
            setCurrentUser, 
            count, 
            userList, 
            setUserList, 
            setCurrentGuess,
            reset,
            letterAppearsInAGuess,
            setToggleGameCompleted
        } = React.useContext(Context)
    const [userInput, setUserInput] = useState({ userName: ""})

    const absentStyle = {backgroundColor: "rgb(163, 173, 189)"}
    const correctStyle = {backgroundColor: "rgb(79, 173, 96)"}

    function returnStyle(letter) {
        if (letterAppearsInAGuess(letter)) {
            return correctStyle
        } else {
            return absentStyle
        }
    }


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
                        <button className="submitWinBtn" onClick={()=> submitToLeaderboard(currentUser)}>Submit Win to Leaderboard</button>
                        <br />
                        <br />
                    </>
                )
            } else {
                return (
                    <>
                        <form className="submitWinForm" onSubmit={()=>submitToLeaderboard(userInput.userName)}>
                            <input className="enterHandle" name="userName" placeholder="Enter Handle" value={userInput.userName} onChange={handleChange} />
                            <button className="submitWinBtn">Submit to LeaderBoard</button>
                        </form>
                    </>
                )
            }
        }
    }

    return(
        <div className="gameCompleteBox">
            <img onClick={()=> setToggleGameCompleted(prev => !prev)} className="exitIcon" src={x} alt="X" />

            {count < 3 &&
                    <h3 className="gameCompleteBox--result">Better luck next time.</h3>
            }
            {count === 3 &&
                <h3 className="gameCompleteBox--result">Congratulations{currentUser && ` ${currentUser}`}!</h3>
            }

            <div className="gameCompleteBox--answerDisplay">
                <table className="answerTable">
                    <trow>
                        <td style={returnStyle(answers[0][0])} ><h3>{answers[0][0]}</h3></td>
                        <td style={returnStyle(answers[0][1])} ><h3>{answers[0][1]}</h3></td>
                        <td style={returnStyle(answers[0][2])} ><h3>{answers[0][2]}</h3></td>
                    </trow>
                </table>
                
                <table className="answerTable">
                    <trow>
                        <td style={returnStyle(answers[1][0])} ><h3>{answers[1][0]}</h3></td>
                        <td style={returnStyle(answers[1][1])} ><h3>{answers[1][1]}</h3></td>
                        <td style={returnStyle(answers[1][2])} ><h3>{answers[1][2]}</h3></td>

                    </trow>
                </table>

                <table className="answerTable">
                    <trow>
                        <td style={returnStyle(answers[2][0])} ><h3>{answers[2][0]}</h3></td>
                        <td style={returnStyle(answers[2][1])} ><h3>{answers[2][1]}</h3></td>
                        <td style={returnStyle(answers[2][2])} ><h3>{answers[2][2]}</h3></td>

                    </trow>
                </table>
            </div>
                        

            {promptNameAndSubmit()}
            <button onClick={reset} className="playAgainBtn">Play Again</button>
        </div>
    )
}
