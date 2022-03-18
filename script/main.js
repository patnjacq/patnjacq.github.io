window.onload = function(){
    document.getElementById("byweek").innerHTML = createList();}

const arr = ['<a href = "wdd330/week1/index.html">Week 1</a>', '<a href = "wdd330/week2/index.html">Week 2</a>', '<a href = "wdd330/week3/index.html">Week 3</a>', '<a href = "wdd330/week4/index.html">Week 4</a>', '<a href = "wdd330/week5/index.html">Week 5</a>',
'<a href = "wdd330/week6/todo-challenge/index.html">The Big Todo Challenge</a>', '<a href = "wdd330/week7/index.html">Week 7 Ajax and Functions</a>', '<a href = "wdd330/week8/index1.html">Week 8 Animations</a>', '<a href = "wdd330/week9/index.html">Week 09 Windows Object and HTML5 API</a>', 
'<a href = "wdd330/week10/index.html">Week 10 Fetch and Form Validation</a>', '<a href = "wdd330/week11/index.html">Project Update</a>','<a href = "wdd330/week12/index.html">Project update</a>' ];

function createList() { 
    let txt = '<ol>';
    for (x in arr){
     txt += '<li>'+ arr[x] + '</li>' ;}
     txt += '</ol>';
return txt;
}
