export default function saveList(alist, storeName){
    const jsonList = JSON.stringify(alist);
   localStorage.setItem(storeName, jsonList);
   
}
   