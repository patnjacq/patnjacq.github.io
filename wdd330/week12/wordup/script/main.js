//import AbcBox from "./boxes.js";
import newWord, { updateLetterColors } from "./guesses.js"
import saveList from "./saveStorage.js";
import getSavedList from './getStorage.js';

const alphaStorage = 'alpha';
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
let letterObjs = [];
const AbcObj = function(alpha, state){
    this.letter= alpha,
    this.guessState = state
}


function newAlpha(){
    letterObjs = []
    abc.forEach(a => {
        let abcObj = new AbcObj(a, 'normal');
        letterObjs.push(abcObj);
    });
    displayAlpha();
    saveList(letterObjs, alphaStorage)
     }

function displayAlpha(){
    let txt = '';
    letterObjs.forEach(obj => {txt += `<div class = "box ` + obj.guessState+`"><p>`+ obj.letter + `</p></div>`;});
    txt += "<button id = 'newGame' > New Game</button>";
    document.getElementById('alpha').innerHTML = txt; 
    getEventListeners(); 
    
}

function toggle(e){
    let x = e.target.innerText;
    let newState = '';    
    let index = letterObjs.findIndex((obj) => obj.letter === x);
    if (letterObjs[index].guessState == "normal"){
        letterObjs[index].guessState = "grayed";
        newState = "grayed";
    }
    else if (letterObjs[index].guessState =="grayed"){
        letterObjs[index].guessState = "highlight";
        newState = "highlight";
    }
    else {
        letterObjs[index].guessState = "normal";
        newState = "normal";
    }
    displayAlpha();
    saveList(letterObjs, alphaStorage);
    updateLetterColors(x, newState); 

}

function setAlphaList(storedName){
    letterObjs = getSavedList(storedName);
    if (letterObjs.length == 0){
        newAlpha();
    }
    displayAlpha();
}

function startNew(){
    let newGame = [true]
    newWord(newGame) ;
    newAlpha();
    

}

function sendNewWord(){
    let nxt = document.getElementById('newguess').value ;
    let l1 = nxt.charAt(0);
    let l2 = nxt.charAt(1);
    let l3 = nxt.charAt(2);
    let l4 = nxt.charAt(3);
    let l1State = getState(l1);
    let l2State = getState(l2);
    let l3State = getState(l3);
    let l4State = getState(l4);
    let nxtArray = [nxt, l1, l2, l3, l4, l1State, l2State, l3State, l4State]
    newWord(nxtArray);
}

function getState(x){
    let i = 0
    while (i<26){
        console.log(letterObjs[i].letter, x);
        if (letterObjs[i].letter == x){
            return letterObjs[i].guessState;}
        else {++i}    

    }

}

function getEventListeners(){  
    
    const btn = document.getElementById('enter');
    btn.addEventListener('click', sendNewWord);
    const boxes = document.querySelectorAll ('.box');
    boxes.forEach(x => x.addEventListener('click', toggle));
    const newGame = document.getElementById('newGame');
    newGame.addEventListener('click',startNew );

}

 
window.onload = function () {setAlphaList(alphaStorage)};
