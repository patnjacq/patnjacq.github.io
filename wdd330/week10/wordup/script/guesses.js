
const guessedWords = [];
const theWord = 'desk'
const output = document.getElementById('output').innerHTML

export default function newWord(){
    let newGuess = document.getElementById('newguess').value ;
    if (checkWord(newGuess)) {
        document.getElementById('output').innerHTML = '';
       
        const word = {
            name: newGuess,
            score: score( theWord, newGuess)
        };
        document.getElementById('newguess').value = '';
        guessedWords.push(word);
        console.log(guessedWords);
        document.getElementById('wordlist').innerHTML = makeLi();
  
    }   
    
}

function makeLi(){
    let len = guessedWords.length;
    let txt = '';
    while (len > 0){
        let index = len -1; 
        console.log (len)
       txt += `<li>`+ len +' '+ guessedWords[index].name + ' ' +guessedWords[index].score +' </li>';
       --len;

    };
   
    return txt;
    
}
 function checkWord(x) {
     if (!(x.length == 4)){
         let txt = 'word needs to be 4 letters';
         document.getElementById('output').innerHTML = txt;
         return false;
        }
    else {return true} ;   
 }

 function score(x, y){

    let a1 = x.charAt(0);
    let a2 = x.charAt(1);
    let a3 = x.charAt(2);
    let a4 = x.charAt(3);
    let tst = [a1, a2, a3, a4]
    let k = 0;
    tst.forEach(a => {if(y.search(a)> -1){ ++k}});
    return k; 
 }
