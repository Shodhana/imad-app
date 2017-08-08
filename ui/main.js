console.log('Loaded!');
var ele=document.getElementById('main');
ele.innerHTML="Boooo Yaaaa!";


//image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function () {
    var intrvl=setInterval(moveRight,50);
     
}

var button=document.getElementById('counter');
button.onclick=function () {
    
    var c=0;
    //pass counter variable to span value
    var span=document.getElementById('count');
    c=c+1;
    span.innerHTML=c.toString();
}