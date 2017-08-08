console.log('Loaded!');


var btn=document.getElementById('counter');

btn.onclick = function () {
    
    //Create request object
    var req=new XMLHttpRequest();
    
    //capture the Response and record
    req.onreadystatechange=function () {
        if(req.readyState===XMLHttpRequest.DONE) {
            //take action
            if(req.status===200) {
                var counter=req.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
   //Make Req
   req.open('GET','http://shodhanab.imad.hasura-app.io/counter',true);
   req.send(null);
   
};


//Submit name
var nametext=document.getElementById('text');
nametext=nametext.value;
var submit=document.getElementById('sub');
submit.onclick=function () {
    //make a req to the server and send name
    
    //capture the name as list
    var names=['name1','name2','name3'];
    var list="";
    for(var i=0;i<names.length;i++)
    {
        list+='<li> ' +names[i]+ ' </li>';
    }
    
    var ul=document.getElementById('uol');
    ul.innerHTML=list;
};