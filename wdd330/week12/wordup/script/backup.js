//import realWord from "./fetch";

let guessedWords = [];
const theWord = 'desk'
const outputDiv = document.getElementById('output')
const wordURl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const gameList = "game1";

export default function newWord(){
    let newg = document.getElementById('newguess').value ;
    let newGuess = newg.toLowerCase();
    console.log(guessedWords);
    document.getElementById('output').innerHTML = '';
    if (checkLength(newGuess)) {
        //renderList(newGuess, guessedWords);
        const word = {
            name: newGuess,
            score: score( theWord, newGuess)
        };
        console.log(guessedWords );
        console.log(word);
        document.getElementById('newguess').value = '';
        guessedWords.push(word);
        console.log(guessedWords);
        saveList(guessedWords, gameList)
        document.getElementById('wordlist').innerHTML = makeLi();


        // let myPromise = new Promise(function(myResolve, myReject) {
        //     let wordCheck = wordURl + x;
        //     fetch(wordCheck)
        //     .then( response => {  
        //          if(response.ok){ 
        //             myResolve(newGuess);                                
        //         }
        //         else{
        //             myReject("Word not found in Dictionary");
        //         }});

        // });
        // myPromise.then(
        // function(value) {renderList(value);},
        // function(error) {divOutput(error);}
        // );
        // // var doSome = new Promise(realWord(newGuess));
        // // outputDiv.addEventListener(transitionend, renderList(newGuess));
    }   
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
    
    function saveList(alist, storeName){
        const jsonList = JSON.stringify(alist);
        console.log('saved json string',  jsonList)      
       localStorage.setItem(storeName, jsonList);
    }
function getSavedList(storeName, alist){
    
    var str = localStorage.getItem(storeName);
    let parsedArray = [];
    
    if(!(str==null) ){
         parsedArray = JSON.parse(str);
    } 
    //console.log("json", str)
    parsedArray.forEach(obj => alist.push(new TodoObj(obj.id, obj.name, obj.checked)));
    console.log('saved json' + alist);
    return alist; 
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
            outputDiv.innerHTML = x;
            outputDiv.classList.add('animate');                              
            
        }
        else{
        let txt = ' Word not found in Dictionary';
        document.getElementById('output').innerHTML = txt;}

     })
    //.then( response => response.text() )
    //.then( text => outputDiv.innerText = text )
    //.catch( error => console.log('There was an error:', error))

    }
 function renderList(aguess, alist){
    const word = {
        name: aguess,
        score: score( theWord, aguess)
    };
    document.getElementById('newguess').value = '';
    alist.push(word);
    console.log(alist);
    saveList(alist, gameList);
    document.getElementById('wordlist').innerHTML = makeLi();

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
 function setWordList(storedName, alist){
     alist = getSavedList(storedName);
 }

 window.onload = function(){setWordList(gameList, guessedWords);}