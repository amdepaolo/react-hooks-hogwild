import React from "react";
import Tile from "./Tile";

function Tiles({hogs, onPigClick}){
    const pigTiles = hogs.map(hog => {
        return(
            <Tile
                name={hog.name}
                image ={hog.image}
                key={hog.name}
                onPigClick={onPigClick}
            />
        )
    })

    return(
        <div className="ui cards ui eight wide column">
            {pigTiles}
        </div>
    )
}

export default Tiles