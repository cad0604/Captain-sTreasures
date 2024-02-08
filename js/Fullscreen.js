// 判断各种浏览器，找到正确的方法
function yxquanpin(element) {
    if (document.getElementById("quanpinimgid").src.match("fullscreen-on")){
        document.getElementById("quanpinimgid").src="img/fullscreen-off.png";
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }else{
        document.getElementById("quanpinimgid").src="img/fullscreen-on.png";
        var exitMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullScreen;
        if (exitMethod) {
            exitMethod.call(document);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    
    }
   }
   //上一关，下一关
function syguan(){
    if (yxcs.gk>1) {
        yxcs.gk-=1;
        console.log(yxcs.gk);
    }
document.getElementById("yxleveltextid").innerHTML=`Level-${yxcs.gk}`;
document.getElementById("yxscoretextid").innerHTML=yxcs.fs;
document.getElementById("yxplaydiv0id").remove();
youxiplaydiv(yxcs.gk);
//document.getElementById("yxsjtdivid").remove();
//document.getElementById("yxsjtextdivid").remove();
//youxitimemap();
document.getElementById("yxguogdivid").style.visibility="hidden";
document.getElementById("yxgoverdivid").style.visibility="hidden";
}
function xyguan(){
    if (yxcs.gk<50) {
        yxcs.gk+=1;
        console.log(yxcs.gk);
    }
document.getElementById("yxleveltextid").innerHTML=`Level-${yxcs.gk}`;
document.getElementById("yxscoretextid").innerHTML=yxcs.fs;
document.getElementById("yxplaydiv0id").remove();
youxiplaydiv(yxcs.gk);
//document.getElementById("yxsjtdivid").remove();
//document.getElementById("yxsjtextdivid").remove();
//youxitimemap();
document.getElementById("yxguogdivid").style.visibility="hidden";
document.getElementById("yxgoverdivid").style.visibility="hidden";
}