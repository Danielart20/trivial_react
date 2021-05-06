import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios';

const Question = ({question, correctAnswer, incorrectAnswers}) => {
   const [answers, setAnswers] = useState([correctAnswer, incorrectAnswers]);
    
    return (
        <Fragment>
                <h3>{question}</h3>
                {answers.map((answer) => 
                    <p>{answer}</p>
                )}
            
        </Fragment>
     );
}
 
export default Question;