console.log('Loaded!');


var button=document.getElementById('counter');
button.onclick=function () {
    
    var c=0;
    //pass counter variable to span value
    var span=document.getElementById('count');
    c=c+1;
    span.innerHTML=c.toString();
}