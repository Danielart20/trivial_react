import React, {Fragment, useState, useEffect} from 'react'
import Inicio from './componentes/Start'
import Game from './componentes/Game/Game'

function App() {

  const [showGame, setShowGame] = useState(JSON.parse(localStorage.getItem('setShowGame')));
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')));
 console.log(players)


  return (
    <Fragment>
      <div class="container">
      {showGame ? (
        <Inicio 
          setShowGame={setShowGame}
          setPlayers={setPlayers}
      />) : (
        <Game 
          playersp={players}
        />)}
          
          
      </div>
    </Fragment>
  );
}

export default App;
