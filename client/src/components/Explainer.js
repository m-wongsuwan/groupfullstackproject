import React from "react";
import { Context } from "../context";
import x from '../images/x-circle-black.svg'


export default function Explainer() {

    const { setShowExplainer } = React.useContext(Context)

    return(
        <div className="explainer infoPopUp">
            <img onClick={()=> setShowExplainer(false)} className="exitIcon" src={x} alt="X" />
            <h1 className="popUpH1">Rules</h1>
            <p>
                You have nine guesses to guess three three-letter words.
            </p>
            <br />
            <p>
            Guesses are shared across columns.
            </p>
            <br />

            <h2>
                Good luck!
            </h2>
        </div>
    )
}