import React, {useState} from 'react'
import Start from './componentes/Start'
import Game from './componentes/Game/Game'

function App() {
  var bool;
  
  if(localStorage.getItem("setShowGame")){
    bool = JSON.parse(localStorage.getItem("setShowGame"))
  }else{
    bool = true;
  }
  const [showGame, setShowGame] = useState(bool);
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')));


  return (

      <div className="container">
      {showGame ? (
        <Start 
          setShowGame={setShowGame}
          setPlayers={setPlayers}
      />) : (
        <Game 
          playersp={players}
        />)}
          
          
      </div>

  );
}

export default App;
