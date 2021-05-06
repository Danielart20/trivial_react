import React, {Fragment, useState} from 'react'
import Inicio from './componentes/Start'
import Game from './componentes/Game'

function App() {

  const [showGame, setShowGame] = useState(true);
  const [players, setPlayers] = useState([]);



  return (
    <Fragment>
      <div class="container"> 
        
        {showGame ? (
          <Inicio 
            setShowGame={setShowGame}
            players={setPlayers}
          />

        ):(
          <Game 
          playersp={players}
          />
        ) }
    
    </div>  

    </Fragment>
  );
}

export default App;
