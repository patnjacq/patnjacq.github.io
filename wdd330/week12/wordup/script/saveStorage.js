export default function saveList(alist, storeName){
    const jsonList = JSON.stringify(alist);
    console.log('saved json string',  jsonList);      
   localStorage.setItem(storeName, jsonList);
   
}
   