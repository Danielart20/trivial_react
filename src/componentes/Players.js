import React, {useState, Fragment} from 'react'
import Player from './Player'

const Players = ({players}) => {
    return ( 
        <Fragment>
            <div className="players">
            <Player 
                player={players[0]}
            />
            <Player 
                player={players[1]}
            />
            <Player 
                player={players[2]}
            />
            <Player 
                player={players[3]}
            />
        </div>
        </Fragment>

     );
}
 
export default Players;