console.log('Loaded!');


var btn=document.getElementById('counter');
var c=0;
btn.onclick = function () {
    
    //make req to counter
    var req=new XMLHttpRequest();
    
    //pass counter variable to span value
    c=c+1;
    var span=document.getElementById('count');
   
    span.innerHTML=c.toString();
};