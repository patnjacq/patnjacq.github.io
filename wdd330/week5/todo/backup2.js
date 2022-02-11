
    window.onload = function(){
        showList();}
    var listOfTodos = [];



//Create Object TodoObj
    const TodoObj = function(name){
        this.id = getId();
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

    
        let txt = `<div id = 'todoItem' class = `+obj.id+ `> `
        txt += addBox(obj);
        txt += addText(obj);
        txt += addDeleteButton(obj);
        txt += `</div> `
        return txt;    
    }

 

    
    
//retrieve the string stored in local storage. Parse string into array of obj, return array
    function getList(){
       var str = localStorage.getItem("savedList");
       //console.log('str is null', (str==null))
       //console.log('str is not null', (!(str==null)))
       if(!(str==null) ){
           listOfTodos = JSON.parse(str);
       } 
       console.log(listOfTodos);
       return listOfTodos;  
    }

//stringify array of obj, save string in local storage.
    function saveList(){
        const jsonList = JSON.stringify(listOfTodos);
       localStorage.setItem("savedList", jsonList);
    }

// get input, instantiate new TodoObj, reset input value, add object to array, save new array, show new array   
    function createItem(){
       getList();
       var newItem = document.getElementById('listItem').value
       let newObj = new TodoObj(newItem);
       document.getElementById('listItem').value = '';
       listOfTodos.push(newObj);
       saveList();
       showList();
    }
// html for delete button     
    function addDeleteButton(obj){
      let btn = `<button class = 'delete'  name = '`+obj.id+`'  > X </button>`;
        return btn;
        
        
    }
 
    function addBox(obj){
        let txt = "<div"
        if (obj.checked == true){
            txt +=` class = 'box check' title = '`+obj.id+`'>x</div>`;}
        else{
            txt+= ` class = 'box' title = '`+obj.id+`'></div>`;
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
        let objId =parseInt(e.target.title);        
        let objList = getList();
        let index = objList.findIndex((obj) => obj.id === objId);
        let toggle =!(objList[index].checked);
        objList[index].checked = toggle;
        saveList();
        showList();
    }
    
    
    function getId(){
        let newx = 0;
        let x = parseInt(localStorage.getItem("uniqueId"));
        if (x==null){
            newx = 1}
        else {
            newx = x + 1;
        }  
        localStorage.setItem("uniqueId", newx);
        return newx;
    }

   // 
   function getObjId(e){
       console.log(e.target)
        return objId =parseInt(e.target.name);
        
        
    }
   
    function deleteItem(e) {  
        let objId =parseInt(e.target.name); 
        console.log(e.target.name)    
        let objList = getList();
        let index = objList.findIndex((obj) => obj.id === objId);

        objList.splice(index, 1);
        saveList();
        showList();

    }       
   
    
    