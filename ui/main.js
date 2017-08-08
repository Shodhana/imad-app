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
    var intrvl=setInterval(moveRight,100);
     
}