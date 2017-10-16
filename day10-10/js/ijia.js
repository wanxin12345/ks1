/**
 * Created by Mr_gao on 2017/10/13.
 */
var b=0;
function jia(){
        b++;
        var h1=document.getElementsByTagName("h1");
        h1[0].innerHTML=b;
}
setInterval("jia()",1000);