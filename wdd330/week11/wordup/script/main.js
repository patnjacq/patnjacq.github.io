//import AbcBox from "./boxes.js";
import newWord from "./guesses.js"

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
let letterObjs = [];


function newAlpha(){
    letterObjs = []
    abc.forEach(a => {
        const abcObj = {
            letter: a,
            guessState: 'normal'
        }
        letterObjs.push(abcObj);
        
                
    });
    displayAlpha();
     }

function displayAlpha(){
    let txt = '';
    letterObjs.forEach(obj => {txt += `<div class = "box ` + obj.guessState+`"><p>`+ obj.letter + `</p></div>`;});
    document.getElementById('alpha').innerHTML = txt; 
    getEventListeners(); 
    
}
function displayAlpha1(){
    let txt = '';
    letterObjs.forEach(obj => {txt += `<div class = "box ` + obj.guessState+`"><p>`+ obj.letter + `</p></div>`;});
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
    console.log(letterObjs[23])
    displayAlpha1();
  

}

newAlpha(); 


function getEventListeners(){  
    const btn = document.getElementById('enter');
    btn.addEventListener('click', newWord);
    const boxes = document.querySelectorAll ('.box');
    boxes.forEach(x => x.addEventListener('click', toggle));
}
