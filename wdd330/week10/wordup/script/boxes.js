

const boxes = document.querySelectorAll ('.box');
boxes.forEach(x => x.addEventListener('click', toggle));


function toggle(e){
    console.log(e.path)
    
}
function updateChecked(e){      
    let objId =parseInt(e.target.title);        
    let objList = getList();
    let index = objList.findIndex((obj) => obj.id === objId);
    objList[index].toggle(); 
    saveList(objList);
    showList();
}
class GuessBox{
    constuctor(_letter, _guessState){
        this.letter = _letter;
        this.guessState = _guessState;

}
    







  
    addText()  {
        let txt = `<p id = "text"`;
        if (this.checked == true){
            txt +=` style = "text-decoration: line-through"`;}
        txt+= ` >`+ this.name + `</p>`    
        return txt;    
    }
    addBox(){
        let txt = "<div"
        if (this.checked == true){
            txt +=` class = 'box check' title = '`+this.id+`'>x</div>`;}
        else{
            txt+= ` class = 'box' title = '`+this.id+`'></div>`;
        }   
        return txt;

    }
    addDeleteButton(){
        let btn = `<button class = 'delete'  name = '`+this.id+`'  > X </button>`;
          return btn;
          
          
    }

    //create the <li> html with box, name, and delete
    makeLi(){
        let txt = `<div id = 'todoItem' class = '`+this.id + ` ` + this.checked+ `'> `
        txt += this.addBox();
        txt += this.addText();
        txt += this.addDeleteButton();
        txt += `</div> `
        return txt;    
    }
    // change this.checked from true to false and vice versa
    toggle(){
        let changeCheck = !(this.checked);
        this.checked = changeCheck;
    }
}