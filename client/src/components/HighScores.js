import axios from "axios";
import React from "react";
import { Context } from "../context";

export default function HighScores() {
    const {userList, setUserList} = React.useContext(Context)
    const [toggleAdmin, setToggleAdmin] = React.useState(false)

    const sortedList = userList.sort((b, a) => a.score - b.score)

    function deleteUser(userId) {
        axios.delete(`/users/${userId}`)
            .then(res => setUserList(userList.filter(user => user._id !== userId)))
            .catch(err => console.log(err))
    }

    const sortedMap = sortedList.map((user, index) => {
        return (
            <li key={index}>
                {index + 1}. {user.userName} - {user.score} Wins {toggleAdmin && <button onClick={()=> deleteUser(user._id)}>Delete</button>}
            </li>
        )
    })

    return(
        <div className="highScores">
            <h1>High Scores</h1>
            <div className="listDiv">
                <ul>
                    {sortedMap}
                </ul>
            </div>
            <footer>
                <button onClick={()=> setToggleAdmin(prev => !prev)} >
                    Admin Controls
                </button>    
            </footer>
        </div>
    )
}