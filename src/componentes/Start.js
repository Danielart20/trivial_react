import React, {useState, Fragment} from 'react'
import Error from './Error'
import Imagen from '../img/trivial.png'



const Inicio = ({setShowGame, setPlayers}) => {

    const [error, setError] = useState(false);

        const [player1, setPlayer1] = useState({
            name : '',
            points : 0
            });
    
        const [player2, setPlayer2] = useState({
            name : '',
            points : 0
        });
    
        const [player3, setPlayer3] = useState({
            name : '',
            points : 0
        });
    
        const [player4, setPlayer4] = useState({
            name : '',
            points : 0
        });

    const validar = e =>{
        
        e.preventDefault();

        if (player1.name === "" || player2.name === "" || player3.name === "" || player4.name === ""){
            setError(true);
            return;
        }
        
        setShowGame(false);
        setPlayers([player1, player2, player3, player4])
        localStorage.setItem('setShowGame', JSON.stringify(false));
        localStorage.setItem('players', JSON.stringify([player1, player2, player3, player4]));


    }


    return ( 
        <Fragment>

            <div className="wrapper">
            <h1>Trivia</h1>
                {error ? <div className="messageError"><Error message="Complete all the fields" /></div> : null}
                <form onSubmit={validar}>
                    <label htmlFor="player1">Player 1 <input type="text" name="player1"  onChange={ e => setPlayer1({...player1, name : e.target.value})}/></label>
                    <label htmlFor="player2">Player 2 <input type="text" name="player2"  onChange={ e => setPlayer2({...player2, name : e.target.value})}/></label>
                    <label htmlFor="player3">Player 3 <input type="text" name="player3"  onChange={ e => setPlayer3({...player3, name : e.target.value})}/></label>
                    <label htmlFor="player4">Player 4 <input type="text" name="player4"  onChange={ e => setPlayer4({...player4, name : e.target.value})}/></label>
                
                    <br/><input type="submit" value="Play" />
                </form>
                <img src={Imagen} alt="trivial logo" className="rotate"/>
            </div>

        </Fragment>


     );
}
 
export default Inicio;