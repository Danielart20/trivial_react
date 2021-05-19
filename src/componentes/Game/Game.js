import React, {useState, Fragment} from 'react';
import axios from 'axios';
import Players from '../Players'
import Question from './Question'
import Categories from './Categories';


const Game = ({playersp}) => {
    if(localStorage.getItem("turn")){
        var turn = JSON.parse(localStorage.getItem("turn"));
    }else{
        var turn = 0;
    }
    console.log(turn)

    const [call, setCall] = useState(JSON.parse(localStorage.getItem("call")) || []);
    const [showQuestion, setShowQuestion] = useState(false);
    const [categorySelected, setCategorySelected] = useState("");
    const [isTurnFor, setTurn] = useState(playersp[turn]);


    if(call.length === 0){
        axios.post('https://opentdb.com/api.php?amount=5&difficulty=easy')
        .then(res => {
            localStorage.setItem("call", JSON.stringify(res.data.results));
            setCall(res.data.results);
            
        }) 
        
    }

    return (
        <Fragment>
            <Players 
                players={playersp}
            />
            <h1>Is Turn For: {isTurnFor.name}</h1>
            { showQuestion ? 
                (
                    <div className="questions">
                    <h2>Question</h2>
                        <Question 
                            categorySelected={categorySelected}
                            isTurnFor={isTurnFor}
                            setShowQuestion={setShowQuestion}
                        /> 
                    </div>
                ):(
                    <div className="categories">
                        <h2>Categories</h2>
                        <ul>
                            <Categories 
                                call={call}
                                setShowQuestion={setShowQuestion}
                                setCategorySelected={setCategorySelected}
                            />
                        </ul>
                    </div>
                )}
        </Fragment>
     );
}
 
export default Game;
