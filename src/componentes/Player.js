import React from 'react'


const Player = ({player}) => {
    console.log(player);
    return (
        <div> 
            <h2>{player.name}</h2>
            <p>{player.points}</p>
        </div>
     );
}
 
export default Player;
