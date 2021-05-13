import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios';
import Players from '../Players'
import Question from './Question'
import Categories from './Categories';


const Game = ({playersp}) => {


    const [call, setCall] = useState(JSON.parse(localStorage.getItem("call")) || []);
    const [showQuestion, setShowQuestion] = useState(false);
    const [categorySelected, setCategorySelected] = useState("");
    console.log(categorySelected)
    console.log(call)

    if(call.length == 0){
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
            { showQuestion ? 
                (
                    <div className="questions">
                    <h2>Question</h2>
                        <Question 
                            call={call}
                            categorySelected={categorySelected}
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
