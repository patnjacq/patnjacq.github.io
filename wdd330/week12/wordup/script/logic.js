import getSavedList from './getStorage.js';
import { gameList } from './guesses.js';

let gray = [];
let yellow = [];


export default function logicCheck(){
    gray = [];
    yellow = [];
    let listForLogic = getSavedList(gameList);
  
    listForLogic.forEach(word =>{
        score0(word);
        fourLessGrayIsScore(word);
        yellowIsScore(word);
    });
    let uniqueGray = [];
    let uniqueYellow = []
    gray.forEach(x =>{if (!uniqueGray.includes(x)){uniqueGray.push(x);}});
    yellow.forEach(x =>{if (!uniqueYellow.includes(x)){uniqueYellow.push(x);}});

    let results = [uniqueGray, uniqueYellow]

    return results;
   
}

function score0(word){
    if(word.score == 0){
        gray.push(word.l1);
        gray.push(word.l2);
        gray.push(word.l3);
        gray.push(word.l4);
       
    }
}

function fourLessGrayIsScore(word){
    let count = 0;
    let score = word.score;
    if (word.l1State == "grayed"){ ++count};
    if (word.l2State == "grayed"){ ++count};
    if (word.l3State == "grayed"){ ++count};
    if (word.l4State == "grayed"){ ++count};
    if (4-count == score){
        if (word.l1State !== "grayed"){ yellow.push(word.l1)};
        if (word.l2State !== "grayed"){ yellow.push(word.l2)};
        if (word.l3State !== "grayed"){ yellow.push(word.l3)};
        if (word.l4State !== "grayed"){ yellow.push(word.l4)};
    }
}

function yellowIsScore(word){
    let count = 0;
    let score = word.score;
    if (word.l1State == "highlight"){ ++count};
    if (word.l2State == "highlight"){ ++count};
    if (word.l3State == "highlight"){ ++count};
    if (word.l4State == "highlight"){ ++count};
    if (score == count){
        if (word.l1State !== "highlight"){ gray.push(word.l1)};
        if (word.l2State !== "highlight"){ gray.push(word.l2)};
        if (word.l3State !== "highlight"){ gray.push(word.l3)};
        if (word.l4State !== "highlight"){ gray.push(word.l4)};

    }

}





