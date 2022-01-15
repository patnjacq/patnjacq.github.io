window.onload = function(){
    document.getElementById("byweek").innerHTML = createList();}

const arr = ['<a href = "wdd330/week1/index.html">Week 1</a>', '<a href = "wdd330/week2/index.html">Week 2</a>', 'week 3'];

function createList() { 
    let txt = '<ol>';
    for (x in arr){
     txt += '<li>'+ arr[x] + '</li>' ;}
     txt += '</ol>';
return txt;
}
