import React from "react";

function PigDetails({currentPig}){
    const {name, specialty, weight, greased, image} = currentPig

    return(
        <div className="pigTile ui card">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <ul>
                <li>Specialty: {specialty}</li>
                <li>weight: {weight}</li>
                <li>Greased: {greased? 'You betcha': 'Not yet'}</li>
                <li>Highest Medal Achieved: {currentPig["highest medal achieved"]}</li>
            </ul>
        </div>
    )
}

export default PigDetails;