

//retrieve the string stored in local storage. Parse string into array of obj, return array


//stringify array of obj, save string in local storage.
export default function saveList(alist){
     const jsonList = JSON.stringify(alist);
     console.log('saved json string',  jsonList)      
    localStorage.setItem("savedList4", jsonList);
 }

