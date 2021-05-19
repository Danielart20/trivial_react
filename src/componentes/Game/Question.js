import React, {useState, useEffect} from 'react';

const Question = ({categorySelected, isTurnFor, setShowQuestion}) => {

    
    //Ordenamos la pregunta y la respuesta dentro de un array
    const quest = categorySelected.question;
    var answers = [...categorySelected.incorrect_answers, categorySelected.correct_answer];
    //recogemos el turno si esta en localStorage si no, es turno de "0"
    if(localStorage.getItem("turn")){
        var random = JSON.parse(localStorage.getItem("turn"))
    }else{
        var random = 0;
    }

    //timer de 30 segundos, en caso de 0 segundos, se para
    const [timer, setTimer] = React.useState(30);
    const id = React.useRef(null);
    const clearTimer = () => {
        window.clearInterval(id.current);
    };
    React.useEffect(() => {
        id.current = window.setInterval(() => {
        setTimer((time) => time - 1);
        }, 1000);
        return () => clearTimer();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
        clearTimer();
        check(null);
        }
    }, [timer]);

    
    function plus_10_points(){
        //recojo el array de players del localstorage, lo recorro, le añado 10 puntos, lo vuelvo a guardar y paso el turno
        let players = JSON.parse(localStorage.getItem("players"));
        for (let a = 0; a < players.length; a++) {
            if(isTurnFor.name === players[a].name){
                players[a].points += 10;
                localStorage.setItem("players", JSON.stringify(players));
                pass_turn()
            }
        }
    }
    
    function pass_turn(){
        //almaceno variable de "turn" para saber cuando es el turno de quien
        if (random!==3) {
            random++;
        }else {
            random=0;
        }
        localStorage.setItem("turn", JSON.stringify(random));
    }
    
    function delete_category(){
        //recojo el array call del localstorage, busco la categoría que hemos seleccionado y la elimino del array call
        let call = JSON.parse(localStorage.getItem("call"));
        for (let o = 0; o < call.length; o++) {
            if(call[o].question === categorySelected.question){
                call.splice(o, 1);
                localStorage.setItem("call", JSON.stringify(call)); 
            }
        }
        setTimeout(function(){ setShowQuestion(false);window.location.reload(false); }, 2000);
    }
    
    function change_answers_color(){
        let x = document.getElementsByClassName('red');
        document.getElementsByClassName('green')[0].style.background = "green";
        
        Array.from(x).forEach((el) => {
            el.style.background = "red"
    
        });
    }
    
    

    function check(ans){
        //una vez que eliges una respuesta, se para el timer, se cambiar de color las respuestas para saber si es correcta o incorrecta
        clearTimer();
        change_answers_color();
        if(ans === categorySelected.correct_answer){
            //en caso de acertar, se suman 10 puntos al jugador, se pasa el turno y se borra la categoria previamente seleccionada
            plus_10_points();
            delete_category();    
        }else{
            //en caso de fallar, se pasa turno y se borra la categoria
            pass_turn();
            delete_category();
        }
    }
    
    
    return (
        <div>
            <p>{timer}</p>
            <h3>{quest}</h3>
            <ul>
            {answers.map((ans, key) =>{ 
                if(ans === categorySelected.correct_answer){
                    return <li key={key} className='green' onClick={() => {check(ans)}}> {ans} </li>
                }else{
                    return <li key={key} className='red' onClick={() => {check(ans)}}> {ans} </li>
                }
                
            })}
            </ul>
        </div>
     );
}
 
export default Question;