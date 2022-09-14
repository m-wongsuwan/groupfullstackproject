import React, { useState } from "react";
import { Context } from "../context";


export default function Home() {
    
    const { currentUser } = React.useContext(Context)
    const [userName, setUserName] = useState(currentUser)
    const [userInput, setUserInput] = useState({ userName: "", key: ""})

    function handleChange(e) {
        const { name, value } = e.target

        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        setUserName(userInput.userName)
        setUserInput({ userName: "", key: ""})
    }

    return(
        <div className="home">
            <h1>Welcome {userName}</h1>
            <form onSubmit={handleSubmit}>
                <input name="userName" placeholder="Enter Handle" value={userInput.userName} onChange={handleChange} />
                <input name="key" placeholder="Enter Key" value={userInput.key} onChange={handleChange} />
                <button>Log In</button>
                
            </form>
        </div>
    )
}