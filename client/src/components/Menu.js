import React, { useRef } from "react";
import { Context } from "../context";
import x from '../images/x-circle-black.svg'
import portrait from '../images/portrait.JPG'


export default function Menu() {

    const { setShowMenu } = React.useContext(Context)

    return(
        <div className="menu">
            <img onClick={()=> setShowMenu(false)} className="exitIcon" src={x} alt="X" />
            <h2 className="menu--appBy">App by Morgan Wongsuwan</h2>
            <img src={portrait} className="portrait" alt="Site Author Portrait" />
            <a href="https://webdevmorgan.surge.sh" target="_blank" rel="noreferrer">
                <button className="portfolioBtn">Check out my web development portfolio!</button>

            </a>
            <br />
            <br />
            <small className="madeBy">© Morgan Wongsuwan. All rights reserved.</small>
        </div>
    )
}