
    window.onload = function(){
        showList();}
    var listOfTodos = [];



//Create Object TodoObj
    const TodoObj = function(name){
        this.name = name;
        this.checked = false;
    }


// create the html for the <ul> and place it in the innerHTML
     function showList(){
         let listToShow = "<ul><li>Start List</li>"
         let objList = getList();
         let len = objList.length;
         let i = 0;
         
         while (i<len){
             listToShow += makeLi(objList[i]);
             i++;
             
         }
        
         listToShow += "</ul>"
        
         document.getElementById('todoList').innerHTML = listToShow;
         const deleteXs = document.querySelectorAll('.delete');
         console.log(deleteXs);
         deleteXs.forEach(x => x.addEventListener('click', deleteItem));
         const squares = document.querySelectorAll ('.box');
         squares.forEach(x => x.addEventListener('click', updateChecked));
     }


//create the <li> html with box, name, and delete
        function makeLi(obj){
        console.log(obj.name);

    
        let txt = `<div id = 'todoItem'> `
        txt += addBox(obj);
        txt += addText(obj);
        txt += addDeleteButton();
        txt += `</div> `
        return txt;    
    }

 

    
    
//retrieve the string stored in local storage. Parse string into array of obj, return array
    function getList(){
       var str = localStorage.getItem("savedList1");
       //console.log('str is null', (str==null))
       //console.log('str is not null', (!(str==null)))
       if(!(str==null) ){
           listOfTodos = JSON.parse(str);
       } 
       return listOfTodos;  
    }

//stringify array of obj, save string in local storage.
    function saveList(){
        const jsonList = JSON.stringify(listOfTodos);
       localStorage.setItem("savedList1", jsonList);
    }

// get input, instantiate new TodoObj, reset input value, add object to array, save new array, show new array   
    function createItem(){
       getList();
       var newItem = document.getElementById('listItem').value
       let newObj = new TodoObj(newItem);
       document.getElementById('listItem').value = '';
       listOfTodos.push(newObj);
       saveList();
       //console.log(listOfTodos);
       showList();
    }
// html for delete button     
    function addDeleteButton(){
        //let btn = `<div class = 'delete' onClick ="deleteItem()" > X </div>`
      let btn = `<button class = 'delete'  > X </button>`;
        return btn;
        
        
    }
    // 
    function deleteItem(e){
        console.log('delete item');
        console.log(e)
    }

    function addBox(obj){
        let txt = "<div"
        if (obj.checked == true){
            txt +=` class = 'box check'>x</div>`;}
        else{
            txt+= ` class = 'box'></div>`;
        }   
        return txt;

    }    

    function addText(obj) {
        let txt = `<p id = "text"`;
        if (obj.checked == true){
            txt +=` style = "text-decoration: line-through"`;}
        txt+= ` >`+ obj.name + `</p>`
    
        return txt;    
    }

    function updateChecked(e){
        console.log(e)
    }
    
   
   
    
    