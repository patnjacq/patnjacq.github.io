

const boxes = document.querySelectorAll ('.box');
boxes.forEach(x => x.addEventListener('click', toggle));


export default class AbcBox{
    constuctor(_letter, _guessState){
        this.letter = _letter;
        this.guessState = _guessState;}

    makeDiv() {
        let txt = `<div class = "box ` + this.guessState+`"><p>`+ this.letter + `</p></div>`;
        return txt;

    }

    toggle(){
        if (this.guessState == "normal"){
            this.guessState = "grayed";
        }
        else if (this.guessState =="grayed"){
            this.guessState = "highlight";
        }
        else {
            this.guessState = "normal";
        }



        }
    }


    


