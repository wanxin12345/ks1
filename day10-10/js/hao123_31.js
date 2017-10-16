window.onload=function(){
    var body=document.body;
    var button=document.getElementsByTagName("button");

    button[0].onclick=function(){
        body.className="black";
    }
    button[1].onclick= function () {
        body.className="red";
    }
    button[2].onclick= function () {
        body.className="blue";
    }
}