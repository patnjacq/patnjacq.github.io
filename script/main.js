window.onload = function(){
    document.getElementById("byweek").innerHTML = createList();}

const arr = ['<a href = "wdd330/week1/index.html">Week 1</a>', 'week 2', 'week 3'];

function createList() { 
    let txt = '<ol>';
    for (x in arr)
    txt += '<li>'+ arr[x] + '</li>' ;
    txt += '</ol>'
return txt
}
