import React from "react";

function ControlBar({greased, onFilterClick, onSelect}){

    const filterBtnText = greased? "Show All Pigs" : "Show Only Greased Pigs"

    return(
        <div>
            <button onClick={onFilterClick}>{filterBtnText}</button>
            <select onChange={onSelect}>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
        </div>
    )
}

export default ControlBar