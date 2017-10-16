/**
 * Created by Mr_gao on 2017/10/13.
 */
    var p=document.getElementsByTagName("p");
    for(var i=0;i<p.length;i++){
        p[i].onclick= function () {
            this.style.background="#426585";
        }
    }