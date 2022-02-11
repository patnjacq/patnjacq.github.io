import TodoObj from './todoclass.js';
import saveList from './storage-helps.js';
   
   window.onload = function(){
        showList();}
    var listChoice = 'all';





// create the html for the <ul> and place it in the innerHTML
     function showList(){
         let listToShow = "<ul>";
         let objList = getList();
         console.log('listChoice =', listChoice)
         
         let doList =[];
         let doneList = [];
         let len = objList.length;
         
         for(let i = 0; i < len; ++i){
             if(objList[i].checked == false){
                //console.log(todo.checked);
                doList.push(objList[i])}
         else{doneList.push(objList[i])}
         }
         leftToDo(doList.length);
         if (listChoice == 'all' || listChoice == 'active') {
         doList.forEach(todo => listToShow += todo.makeLi());
        console.log(listToShow)}
         if (listChoice == 'all' || listChoice == 'completed') {
         doneList.forEach(todo => listToShow += todo.makeLi());}
         console.log(listToShow)
         listToShow += "</ul>"
         document.getElementById('todoList').innerHTML = listToShow;
         getEventListeners();
         
     }
    

     function getEventListeners(){
        const deleteXs = document.querySelectorAll('.delete');
        deleteXs.forEach(x => x.addEventListener('click', deleteItem));
        const squares = document.querySelectorAll ('.box');
        squares.forEach(x => x.addEventListener('click', updateChecked));
        const setBtns = document.querySelectorAll('.setChoice');
        setBtns.forEach(x => x.addEventListener('click',setList));
        const createBtn = document.getElementById('createNew');
        createBtn.addEventListener("click", createItem);

     }

     function setList(e){
         console.log(listChoice);
         console.log(e.target.value);
         listChoice = e.target.value;
         showList();
         
     }

     
     function leftToDo(len){
         let txt = len +' tasks left'
        document.getElementById('left').innerHTML= txt ; 
          

    }
         
    
//retrieve the string stored in local storage. Parse string into array of obj, return array
    function getList(){
       var listOfTodos = [] 
       var str = localStorage.getItem("savedList4");
       let parsedArray = [];
       
       if(!(str==null) ){
            parsedArray = JSON.parse(str);
       } 
       console.log("json", str)
       parsedArray.forEach(obj => listOfTodos.push(new TodoObj(obj.id, obj.name, obj.checked)));
       console.log(listOfTodos);
       return listOfTodos;  
    }


// get input, instantiate new TodoObj, reset input value, add object to array, save new array, show new array   
    function createItem(){
       let listOfTodos = getList();
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
   
    

 
    

    
    
   
 
    
    