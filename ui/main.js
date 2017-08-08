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