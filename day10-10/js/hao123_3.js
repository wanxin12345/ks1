window.onload=function(){
    var bt_1=document.getElementById("bt_1");
    var bt_2=document.getElementById("bt_2");
    var bt_3=document.getElementById("bt_3");
    var abody=document.getElementById("body");
    bt_1.onclick=function(){
         abody.className="black";
    }
    bt_2.onclick=function(){
        abody.className="red";
    }
    bt_3.onclick=function(){
        abody.className="blue";
    }
}