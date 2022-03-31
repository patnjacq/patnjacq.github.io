import saveList from "./saveStorage.js";
import getSavedList from './getStorage.js';

let guessedWords = [];

const outputDiv = document.getElementById('output')
const wordURl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const gameList = "game1";
const Word = function(newGuess, _score) {
    this.name = newGuess,
    this.score = _score
};
let k = 0
const words=['desk', 'mail', 'jinx', 'taco', 'past', 'kind', 'swim', 'bunk', 'fish', 'veto', 'quit', 'wimp' ];
let theWord = 'desk';

export default function newWord(newg){
    //let newg = document.getElementById('newguess').value ;
    if (newg==true){
        console.log('NEW')
        guessedWords = []; 
        ++k;
       
        designateTheWord();
        console.log('k='+k);
        localStorage.setItem('gameCounter', k);
        saveList(guessedWords, gameList);
        document.getElementById('wordlist').innerHTML = makeLi();
        document.getElementById('output').innerHTML = '';
        
    }
    else{
    let newGuess = newg.toLowerCase();    
    document.getElementById('output').innerHTML = '';
    if( newGuess == theWord){
        let num = guessedWords.length + 1
        let txt = "Congratulations you guessed the word " + theWord + " in " + num + " guesses!";
        txt += "<button id = 'close-btn' class = 'close' > close </button>";
        outputDiv.innerHTML = txt;
        outputDiv.classList.add('winner');
        document.getElementById('close-btn').addEventListener('click', close)



    }
    if (checkLength(newGuess)) {
        realWord(newGuess);}
}}

function close(){
    outputDiv.classList.remove('winner')
}

function makeLi(){
    let len = guessedWords.length;
    let txt = '';
    while (len > 0){
        let index = len -1; 
        console.log (len)
       txt += `<li><p class = 'left'> ` + guessedWords[index].name + '   </p><p class = "right"> ' +guessedWords[index].score +' </p></li>';
       --len;

    };
   
    return txt;
    
}
 function checkLength(x) {
       if (!(x.length == 4)){
         let txt = 'word needs to be 4 letters';
         document.getElementById('output').innerHTML = txt;
         return false;
        }
    else{return true;}
    
    } 
    
      
       
 function divOutput(txt){
    outputDiv.innerHTML = txt; 

 }
 
 function realWord(x) {
     let wordCheck = wordURl + x;
    fetch(wordCheck)
    .then( response => {
      
        console.log('response.ok ='+ response.ok)
        if(response.ok){ 
            let newScore  = score( theWord, x);
            let obj = new Word(x, newScore)

            document.getElementById('newguess').value = '';
            guessedWords.push(obj);
            saveList(guessedWords, gameList);
            document.getElementById('wordlist').innerHTML = makeLi();
                                          
            
        }
        else{
        let txt = ' Word not found in Dictionary';
        document.getElementById('output').innerHTML = txt;}

     })
    
     }

 function score(x, y){

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

 window.onload = function(){setWordList(gameList);}