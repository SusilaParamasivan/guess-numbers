import React from "react";

function Result({secretNum, term}){
   let result;
   if(term){
    if(term < secretNum){
        result = 'lower';
    }else if(term > secretNum){
        result = 'Hiegher';
    }else if(term == secretNum){
        result = 'Congratulation! you found correct Number.';
    }else{
        result='Enter valid number'
    }
   }
    return <h3>You Guessed : {result}</h3>
}
export default Result;