//import AbcBox from "./boxes.js";
import newWord from "./guesses.js"
import saveList from "./saveStorage.js";
import getSavedList from './getStorage.js';


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
    saveList(letterObjs, 'alphahints')
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
    console.log(x);
    let index = letterObjs.findIndex((obj) => obj.letter === x);
    console.log(index);
    if (letterObjs[index].guessState == "normal"){
        letterObjs[index].guessState = "grayed";
    }
    else if (letterObjs[index].guessState =="grayed"){
        letterObjs[index].guessState = "highlight";
    }
    else {
        letterObjs[index].guessState = "normal";
    }
    //console.log(letterObjs)
    displayAlpha();
    saveList(letterObjs,'alphahints'); 

}

function setAlphaList(storedName){
    letterObjs = getSavedList(storedName);
    console.log(letterObjs)
    displayAlpha();
}

function startNew(){
    console.log('clicked');
    newWord(true) ;
    newAlpha();
    

}

function sendNewWord(){
    let nxt = document.getElementById('newguess').value ;
    newWord(nxt);
}

function getEventListeners(){  
    
    const btn = document.getElementById('enter');
    btn.addEventListener('click', sendNewWord);
    const boxes = document.querySelectorAll ('.box');
    boxes.forEach(x => x.addEventListener('click', toggle));
    const newGame = document.getElementById('newGame');
    newGame.addEventListener('click',startNew );

}

 
setAlphaList('alphahints');
