import saveList from "./saveStorage.js";
import getSavedList from './getStorage.js';

let guessedWords = [];
const theWord = 'desk'
const outputDiv = document.getElementById('output')
const wordURl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const gameList = "game1";
const Word = function(newGuess, _score) {
    this.name = newGuess,
    this.score = _score
};

export default function newWord(newg){
    //let newg = document.getElementById('newguess').value ;
    if (newg==true){
        console.log('NEW')
        guessedWords = []; 
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
        outputDiv.innerHTML = txt;
        outputDiv.classList.add('winner')

    }
    if (checkLength(newGuess)) {
        realWord(newGuess);}
}}

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
    .then( response => response.text() )
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
//  function getSavedList(storeName){
//     var str = localStorage.getItem(storeName);
//     let parsedArray = [];
//     if(!(str==null) ){
//          parsedArray = JSON.parse(str);
//     } 
//     console.log("json", str)
//     return parsedArray; 
// }


 function setWordList(storedName){
     guessedWords = getSavedList(storedName);
     document.getElementById('wordlist').innerHTML = makeLi();
 }

 window.onload = function(){setWordList(gameList);}