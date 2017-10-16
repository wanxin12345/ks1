/**
 * Created by Mr_gao on 2017/10/13.
 */
var link=document.getElementById("link");
var input=document.getElementsByTagName("input");
window.onload= function () {
    input[0].onclick= function () {
        link.href="css/skin1.css";
    }
    input[1].onclick= function () {
        link.href="css/skin2.css";
    }
    input[2].onclick= function () {
        link.href="css/skin3.css";
    }
}