import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios';
import Players from '../Players'
import Question from './Question'
import Categories from './Categories';


const Game = ({playersp}) => {
    console.log(playersp)

    const [call, setCall] = useState([]);
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        axios.post('https://opentdb.com/api.php?amount=5&difficulty=easy')
        .then(res => {
            setCall(res.data.results);
            
         }) 
        .catch(err => { 
            console.log(err) 
     }) }, []);

    


    return (
        <Fragment>
            <Players 
                players={playersp}
            />
            { showQuestion ? 
                (
                    <div className="questions">
                    <h2>Question</h2>
                        {call.map((q) => 
                            <Question 
                                question={q.question}
                                correctAnswer={q.correct_answer}
                                incorrectAnswers={q.incorrect_answers}
                            />
                        )}
                    </div>
                ):(
                    <div className="categories">
                        <h2>Categories</h2>
                        <ul>
                            {call.map((c) => 
                                <Categories 
                                    category={c.category}
                                />
                            )}
                        </ul>
                    </div>
                )}
            

        </Fragment>


     );
}
 
export default Game;
