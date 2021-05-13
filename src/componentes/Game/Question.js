import React, {useState, Fragment} from 'react';

const Question = ({call, categorySelected}) => {
   var correctAnswer = "";
   var answers = [];
   var quest = "";
   categorySelected = Object.values(categorySelected)

    for (let l = 0; l < call.length; l++) {
        if([call[l].category][0] === categorySelected[0]){
            correctAnswer = call[l].correct_answer;
            answers = call[l].incorrect_answers;
            quest = call[l].question;
        }
        
    }
    var ran = Math.floor(Math.random() * (3 - 0)) + 0;
    answers.splice(ran, 0, correctAnswer);
    console.log(answers);
   
    
    
    return (
        <Fragment>
                <h3>{quest}</h3>
                {answers.map((ans) =>{ 
                    return <p> {ans} </p>
                })}
            
        </Fragment>
     );
}
 
export default Question;