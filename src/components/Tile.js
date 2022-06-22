import React from "react";

function Tile({name, image, onPigClick}){
    return(
        <div onClick={() =>onPigClick(name)} className= "pigTile ui card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}

export default Tile;