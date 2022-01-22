window.onload = function(){
    document.getElementById("byweek").innerHTML = createList();}

const arr = ['<a href = "wdd330/week1/index.html">Week 1</a>', '<a href = "wdd330/week2/index.html">Week 2</a>', '<a href = "wdd330/week3/index.html">Week 3</a>'];

function createList() { 
    let txt = '<ol>';
    for (x in arr){
     txt += '<li>'+ arr[x] + '</li>' ;}
     txt += '</ol>';
return txt;
}
