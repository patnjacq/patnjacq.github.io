//import TodoObj from "./todo-class.js";
//import {saveList} from './storage-helps.js';


    window.onload = function(){
        showList();}
    var listChoice = 'all';
//Create Object TodoObj
export class TodoObj {
    
    constructor(_id, _name, _checked){
        this.id = _id    
        this.name = _name;
        this.checked = _checked;
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
        let txt = `<div id = 'todoItem' class = `+this.id+ `> `
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
 function getList(){
    var listOfTodos = [] 
    var str = localStorage.getItem("savedList4");
    let parsedArray = [];
    if(!(str==null) ){
        parsedArray = JSON.parse(str);
    } 
    parsedArray.forEach(obj => listOfTodos.push(new TodoObj(obj.id, obj.name, obj.checked)));
    return listOfTodos;  
 }
  function saveList(alist){
    const jsonList = JSON.stringify(alist);
   localStorage.setItem("savedList4", jsonList);
}







// create the html for the <ul> and place it in the innerHTML
     function showList(){
         let listToShow = "<ul>"
         let objList = getList();
         let doList =[];
         let doneList = [];
         let len = objList.length;
         
         for(let i = 0; i < len; ++i){
             if(objList[i].checked == false){
                //console.log(todo.checked);
                doList.push(objList[i])}
         else{doneList.push(objList[i])}
         }
         left(doList.length);
         if (listChoice == 'all' || listChoice == 'active') {
         doList.forEach(todo => listToShow += todo.makeLi());}
         if (listChoice == 'all' || listChoice == 'completed') {
         doneList.forEach(todo => listToShow += todo.makeLi());}
         listToShow += "</ul>"
         document.getElementById('todoList').innerHTML = listToShow;
         getEventListeners();
         
     }

     function leftToDo(len){
         document.getElementsByClassName(left).innerHTML= len + `tasks left `;         

     }
    
    

     function getEventListeners(){
        const deleteXs = document.querySelectorAll('.delete');
        deleteXs.forEach(x => x.addEventListener('click', deleteItem));
        const squares = document.querySelectorAll ('.box');
        squares.forEach(x => x.addEventListener('click', updateChecked));
       const setBtns = document.querySelectorAll('.set')
        setBtns.forEach(x => addEventListener('click',setList))
        

     }

     function setList(e){
         console.log(listChoice);
         console.log(e.target.value);
         listChoice = e.target.value;
         showList();
         
     }
         
    


// get input, instantiate new TodoObj, reset input value, add object to array, save new array, show new array   
    function createItem(){
       listOfTodos = getList();
       var newItem = document.getElementById('listItem').value
       let stmp = +new Date();
       console.log('listOfTodos before newObj', listOfTodos)
       let newObj = new TodoObj(stmp, newItem, false);
       document.getElementById('listItem').value = '';
       listOfTodos.push(newObj);
       
       saveList(listOfTodos);
       showList();
    }

        
    function updateChecked(e){      
        let objId =parseInt(e.target.title);        
        let objList = getList();
        let index = objList.findIndex((obj) => obj.id === objId);
        objList[index].toggle(); 
        saveList(objList);
        showList();
    }
    
    // 
    function deleteItem(e) {  
        let objId =parseInt(e.target.name); 
        console.log(e.target.name)    
        let objList = getList();
        let index = objList.findIndex((obj) => obj.id === objId);
        objList.splice(index, 1);
        saveList(objList);
        showList();

    } 
   
    

 
    

    
    
   
 
    
    