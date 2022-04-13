import saveList from "./saveStorage.js";
import getSavedList from './getStorage.js';

let guessedWords = [];

const fixit = document.getElementById('correction');
const outputDiv = document.getElementById('output');
const wordURl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const gameList = "game1";
const Word = function(guessArray) {
    this.name = guessArray[0],
    this.l1 = guessArray[1],
    this.l2= guessArray[2],
    this.l3 = guessArray[3],
    this.l4 = guessArray[4],
    this.l1State = guessArray[5],
    this.l2State = guessArray[6],
    this.l3State = guessArray[7],
    this.l4State = guessArray[8],
    this.score = score(theWord, guessArray[0])
};
let k = 0
const words=['fish','desk',  'jinx', 'taco', 'past', 'kind', 'swim', 'bunk', 'mail', 'veto', 'quit', 'wimp','fish','desk',  'jinx', 'taco', 'past', 'kind', 'swim', 'bunk', 'mail', 'veto', 'quit', 'wimp' ];
let theWord = 'desk';

export default function newWord(newg){
    fixit.classList.remove('showit');
   //if a new game clear guessedWords array, increment k, designate new theWord, remove winner class from div, new 
    if (newg[0]==true){
        console.log('NEW')
        guessedWords = []; 
        ++k;
        designateTheWord();
        console.log('k='+k);
        localStorage.setItem('gameCounter', k);
        outputDiv.classList.remove('winner');
        saveList(guessedWords, gameList);
        document.getElementById('wordlist').innerHTML = makeLi();
        document.getElementById('output').innerHTML = '';
        
    }
    else{
        console.log(newg)
        let newGuess = newg[0].toLowerCase();    
        document.getElementById('output').innerHTML = '';
        // if newGuess is correct display winner message and add winner class to div add eventListener to close button
        if( newGuess == theWord){
            let num = guessedWords.length + 1
            let txt = "Congratulations you guessed the word " + theWord + " in " + num + " guesses!   ";
            txt += "<button id = 'close-btn' class = 'close' > X </button>";
            outputDiv.innerHTML = txt;
            document.getElementById('newguess').value = '';
            outputDiv.classList.add('winner');
            document.getElementById('close-btn').addEventListener('click', close)
        }
        else if (checkLength(newGuess)) {
            realWord(newg);}
}}

function close(){
    outputDiv.classList.remove('winner')
}

function makeLi(){
    let len = guessedWords.length;
    let txt = '';
    while (len > 0){
        let index = len -1; 
       txt += `<li><p class = 'left'><span class = '`+ guessedWords[index].l1State + `1'>` + guessedWords[index].l1 + '</span>' +
      `<span class = '`+ guessedWords[index].l2State + `1'>` + guessedWords[index].l2 + '</span>' +
      `<span class = '`+ guessedWords[index].l3State + `1'>` + guessedWords[index].l3 + '</span>' +
      `<span class = '`+ guessedWords[index].l4State + `1'>` + guessedWords[index].l4 + '</span>'+
             '</p><p class = "right"> ' +guessedWords[index].score +' </p></li>';
       --len;
    };
   
    return txt;
    
}
 function checkLength(x) {
       if (!(x.length == 4)){
         let txt = 'word needs to be 4 letters';
         console.log('fix it');
         fixit.classList.add('showit');
         fixit.innerHTML = txt;
         return false;
        }
    else{return true;}
    
    } 
 
 function realWord(newg) {
    let wordCheck = wordURl + newg[0];
    fetch(wordCheck)
    .then( response => {
      
        console.log('response.ok ='+ response.ok)
        if(response.ok){ 
            //let newScore  = score( theWord, newg[0]);
            //newg.push(newScore)
            let obj = new Word(newg);
            console.log(obj);
            
            document.getElementById('newguess').value = '';
            guessedWords.push(obj);
            saveList(guessedWords, gameList);
            document.getElementById('wordlist').innerHTML = makeLi();
        }
        else{
         let txt = ' Word not found in Dictionary';
         fixit.classList.add('showit');
         fixit.innerHTML = txt;
    }

     })
    
     }

 function score(x, y){
     console.log(x,y);

    let a1 = x.charAt(0);
    let a2 = x.charAt(1);
    let a3 = x.charAt(2);
    let a4 = x.charAt(3);
    let tst = [a1, a2, a3, a4];
    let k = 0;
    tst.forEach(a => {if(y.search(a)> -1){ ++k}});
    return k; 
 }

function designateTheWord(){    
    theWord = words[k];
    console.log('theWord is ' + theWord);

}
export function updateLetterColors(alpha, state){
    console.log(alpha, state);
    guessedWords.forEach(word => {
        console.log(word);
        if(word.l1 == alpha){
            word.l1State = state;
        }
        else  if(word.l2 == alpha){
            word.l2State = state;
        }
        else  if(word.l3 == alpha){
            word.l3State = state;
        }
        else  if(word.l4 == alpha){
            word.l4State = state;
        }
     } );
    saveList(guessedWords, gameList);
    document.getElementById('wordlist').innerHTML = makeLi();
    }

 function wordState(word){
    if(word.l1 == alpha){
        word.l1State = state;
    }
    else  if(word.l2 == alpha){
        word.l2State = state;
    }
    else  if(word.l3 == alpha){
        word.l3State = state;
    }
    else  if(word.l4 == alpha){
        word.l4State = state;
    }

 }   
        

 function setWordList(storedName){
    var num = localStorage.getItem('gameCounter');
    console.log('retrieved' + k);
    if(!(num==null) ){
        k=num;
   } 
     designateTheWord();
     guessedWords = getSavedList(storedName);
     document.getElementById('wordlist').innerHTML = makeLi();
 }

 //window.onload = function(){setWordList(gameList);}
 setWordList(gameList);