export default function getSavedList(storeName){
    var str = localStorage.getItem(storeName);
    let parsedArray = [];
    if(!(str==null) ){
         parsedArray = JSON.parse(str);
    } 
    return parsedArray; 
}

console.log('hello');