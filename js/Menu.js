//主进程，导入json数据，加载主界面zhudiv并设置背景图片,加载初始菜单cusimenu。
var lvllist;
//var jsdata=JSON.parse(JSON.stringify(dataJson));
function CMain(){
    lvllist=JSON.parse(JSON.stringify(dataJson.levellist));
    //网页内容不可选中
    document.onselectstart=function(){return false}
    //网页内容禁止鼠标右键
    document.oncontextmenu=function(){return false}
    //内容禁止鼠标拖动
    document.ondragstart=function(){return false}
    //网页内容禁止复制文本
    document.onselect=function(){return false}
/*随时更新主div界面尺寸 */
new zhudiv;
window.onresize = function() {
	resize();
    }
}

/*创建/修改主div的构造函数 */
function zhudiv(){
    resize();
    //给主界面设置背景图片
    let beijinimage=document.createElement("img");
    beijinimage.src="img/game_back1.jpg";
    beijinimage.style="width: 100%; height: 100%;";
    document.getElementById("zhujm").appendChild(beijinimage);
    //加载游戏logo和封面菜单
    fengmianmenu();
    //测试用，直接加载游戏。
    //fmplay();
}
//调整界面大小
function resize(){
	var screenheight=window.innerHeight;
    var screenwidth=window.innerWidth;
    if (screenwidth<screenheight){
	    screenheight=0.5625*screenwidth
    }
	var zhudiv=document.getElementById("zhujm");
	zhudiv.style.top=0.5*(window.innerHeight-screenheight)+"px";
	zhudiv.style.width=screenwidth+"px";
	zhudiv.style.height=screenheight+"px";
    //顺便设定一下根元素的fontsize
    document.documentElement.style.fontSize=0.1*screenheight+"px";
	//console.log(window.innerWidth);
	//console.log(screenwidth);
	//console.log(screenheight);
    //顺便记录下界面的宽度和高度
    yxcs.jmw=screenwidth;
    yxcs.jmh=screenheight;
    console.log(yxcs.jmh);
	console.log(yxcs.jmw);
    console.log(document.documentElement.style.fontSize);
}

function fengmianmenu(){
    var zhudiv=document.getElementById("zhujm");
    //封面logo
    let fmlogodiv=document.createElement("div");
    fmlogodiv.style="position: absolute; top: 0; width: 34%; left: 33%;height: 50%;";
    zhudiv.appendChild(fmlogodiv);
    let fmlogoimg=document.createElement("img");
    fmlogoimg.src="img/logo.png";
    fmlogoimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(-50%);";
    fmlogodiv.appendChild(fmlogoimg);
    //封面menu
    let fmmenudiv=document.createElement("div");
    fmmenudiv.style="position: absolute; bottom: 0; height: 50%;width: 32.5%;left:33.75%";
    zhudiv.appendChild(fmmenudiv);
    //按钮continue
    let fmctnimg=document.createElement("img");
    fmctnimg.src="img/ggcontinue.png";
    fmctnimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(-310%);";
    fmctnimg.className="kean";
    fmctnimg.style.visibility="hidden";
    if (typeof(Storage)!=="undefined") {
        if (typeof(localStorage.lv)!=="undefined"){
            console.log("localStorage.lv:"+localStorage.lv);  
            fmctnimg.style.visibility="visible";
        }
} else {   
console.log("抱歉! 不支持 web 存储。");   
}
    fmctnimg.addEventListener("click",function(){fmcontinue();})
    fmmenudiv.appendChild(fmctnimg);
    //按钮play
    let fmplayimg=document.createElement("img");
    fmplayimg.src="img/fmplay.png";
    fmplayimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(-180%);";
    fmplayimg.className="kean";
    fmplayimg.addEventListener("click",function(){fmplay();})
    fmmenudiv.appendChild(fmplayimg);
    //按钮help
    let fmhelpimg=document.createElement("img");
    fmhelpimg.src="img/fmhelp.png";
    fmhelpimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(-50%);";
    fmhelpimg.className="kean";
    fmhelpimg.addEventListener("click",function(){fmhelp();})
    fmmenudiv.appendChild(fmhelpimg); 
    //按钮play more game
    let fmpmgimg=document.createElement("img");
    fmpmgimg.src="img/fmpmg.png";
    fmpmgimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(80%);";
    fmpmgimg.className="kean";
    fmpmgimg.addEventListener("click",function(){fmpmg();})
    fmmenudiv.appendChild(fmpmgimg); 
    //按钮游戏信息
    let fminfimg=document.createElement("img");
    fminfimg.src="img/information.png";
    fminfimg.style="position: absolute; width: 10%;top: 82%; left: 88%;";
    fminfimg.className="kean";
    fminfimg.addEventListener("click",function(){fminf();})
    zhudiv.appendChild(fminfimg); 
    //创建游戏信息div和图片，初始隐藏。（预加载）
    let fminfdiv=document.createElement("div");
    fminfdiv.id="fminfdivid";
    fminfdiv.style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;";
    fminfdiv.style.visibility="hidden";
    let guogimage0=document.createElement("img");
    guogimage0.src="img/back.png";
    guogimage0.style="position: absolute;width: 100%; height: 100%;";
    fminfdiv.appendChild(guogimage0);
    let gameinfimage=document.createElement("img");
    //gameinfimage.id="gameinfimageid"
    gameinfimage.src="img/gameinf.png";
    gameinfimage.style="position: absolute; top: 10%; left: 10%;width: 80%; height: 80%;";
    fminfdiv.appendChild(gameinfimage);
    let fminfbtnimage=document.createElement("img");
    fminfbtnimage.src="img/quit.png";
    fminfbtnimage.style="position: absolute; top: 10%; left: 90%;width: 10%;transform: translateX(-50%);";
    fminfbtnimage.className="kean";
    fminfbtnimage.addEventListener("click",function(){fminf2();})
    fminfdiv.appendChild(fminfbtnimage);
    zhudiv.appendChild(fminfdiv);
    //创建帮助div,初始隐藏
    let fmhlpdiv=document.createElement("div");
    fmhlpdiv.id="fmhlpdivid";
    fmhlpdiv.className="noselect";
    fmhlpdiv.style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;";
    fmhlpdiv.style.visibility="hidden";
    fmhlpdiv.addEventListener("click",function(){fmhelp2();})
    let guogimage=document.createElement("img");
    guogimage.src="img/back.png";
    guogimage.style="position: absolute;width: 100%; height: 100%;";
    fmhlpdiv.appendChild(guogimage);
    let fmhlptext=document.createElement("p");
    fmhlptext.id="fmhlptextid";
    //fmhlptext.className="tcbt";
    fmhlptext.innerHTML="Click/Tap the triangle to rotate/switch the gems, match 3 of the same gems in a triangle to complete it, match all of the triangle to get to the next level.";
    fmhlptext.style="position: absolute;margin: 10%; color:#000; font-size:0.8rem; font-weight:bold;";
    fmhlpdiv.appendChild(fmhlptext);
    zhudiv.appendChild(fmhlpdiv);

}
//游戏信息
function fminf(){
    document.getElementById("fminfdivid").style.visibility="visible";
}
function fminf2(){
    document.getElementById("fminfdivid").style.visibility="hidden";
}
function fmhelp(){
    document.getElementById("fmhlpdivid").style.visibility="visible";
}
function fmhelp2(){
    document.getElementById("fmhlpdivid").style.visibility="hidden";
}
function fmpmg(){
    window.open("https://kissmegames.com/");
}