window.onload = function(){
    document.getElementById("byweek").innerHTML = createList();}

const arr = ['<a href = "wdd330/week1/index.html">Week 1</a>', '<a href = "wdd330/week2/index.html">Week 2</a>', '<a href = "wdd330/week3/index.html">Week 3</a>', '<a href = "wdd330/week4/index.html">Week 4</a>', '<a href = "wdd330/week5/index.html">Week 5</a>',
'<a href = "wdd330/week6/todo-challenge/index.html">The Big Todo Challenge</a>', '<a href = "wdd330/week7/index.html">Week 7 Ajax and Functions</a>'];

function createList() { 
    let txt = '<ol>';
    for (x in arr){
     txt += '<li>'+ arr[x] + '</li>' ;}
     txt += '</ol>';
return txt;
}
