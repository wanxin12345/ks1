window.onload= function () {
    var body=document.body;
    var button=document.getElementsByTagName("button");

    button[0].onclick= function () {
        body.style.backgroundColor="#36c";
    }
    button[1].onclick= function () {
        body.style.backgroundColor="#f88";
    }
    button[2].onclick= function () {
        body.style.backgroundColor="#ddd";
    }
}