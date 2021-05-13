import React, {Fragment, useState, useEffect} from 'react'
import Inicio from './componentes/Start'
import Game from './componentes/Game/Game'

function App() {
  var bool = new Boolean;

  if(localStorage.getItem("setShowGame")){
    bool = JSON.parse(localStorage.getItem("setShowGame"))
  }else{
    bool = true;
  }
  const [showGame, setShowGame] = useState(bool);
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
