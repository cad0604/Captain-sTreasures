//加载游戏界面
function fmplay(){
    var zhudiv=document.getElementById("zhujm");
    //创建游戏主div并加载游戏背景图
    let yxzhudiv=document.createElement("div");
    yxzhudiv.id="yxzhudivid";
    yxzhudiv.style="position: absolute; top: 0; width: 100%; height: 100%;";
    let gamebjimage=document.createElement("img");
    gamebjimage.src="img/game_back2.jpg";
    gamebjimage.style="width: 100%; height: 100%;";
    yxzhudiv.appendChild(gamebjimage);
    zhudiv.appendChild(yxzhudiv);
    //附带创建过关div,初始隐藏
    let yxguogdiv=document.createElement("div");
    yxguogdiv.id="yxguogdivid";
    //yxguogdiv.style="position: absolute; top: 5%; left: 5%; width: 90%; height: 90%;";
    yxguogdiv.style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;";
    yxguogdiv.style.zIndex=19;
    yxguogdiv.style.visibility="hidden";
    let guogimage=document.createElement("img");
    guogimage.src="img/back.png";
    guogimage.style="width: 100%; height: 100%;";
    yxguogdiv.appendChild(guogimage);
    let guogbtnimage=document.createElement("img");
    guogbtnimage.src="img/ggcontinue.png";
    guogbtnimage.className="kean";
    guogbtnimage.style="position: absolute; left: 50%; top: 80%; width: 32.5%; transform: translateX(-50%);z-index: 29";
    guogbtnimage.addEventListener("click",function(){guogzc();})
    yxguogdiv.appendChild(guogbtnimage);
    yxzhudiv.appendChild(yxguogdiv);
    //附带创建过关文字，暂停文字，游戏超时文字，初始隐藏
    let yxguogwzdiv=document.createElement("div");
    yxguogwzdiv.id="yxguogwzdivid";
    yxguogwzdiv.style="position: absolute; top:0; width: 100%; height: 100%;";
    //yxguogwzdiv.style.visibility="hidden";
    yxguogdiv.appendChild(yxguogwzdiv);
    let tcbtdiv=document.createElement("div");
    tcbtdiv.id="tcbtdivid";
    tcbtdiv.style="position: absolute; top: 15%; left: 50%; height: 25%; transform: translateX(-50%);";
    let tcbttext=document.createElement("p");
    tcbttext.id="tcbttextid";
    tcbttext.className="tcbt";
    tcbttext.innerHTML="Level Completed!";
    tcbttext.style="margin: 0; color:#000; font-size:0.8rem; font-weight:bold;";
    tcbtdiv.appendChild(tcbttext);
    document.getElementById("yxguogwzdivid").appendChild(tcbtdiv);
    let tcp1div=document.createElement("div");
    tcp1div.id="tcp1divid";
    tcp1div.style="position: absolute; top: 40%; left: 10%; width: 80%; height: 15%;";
    let tcp1ldiv=document.createElement("div");
    tcp1ldiv.id="tcp1ldivid";
    tcp1ldiv.style="position: absolute; top: 0; left: 0; width: 50%; height: 100%;";
    tcp1div.appendChild(tcp1ldiv);
    let tcp1ltext=document.createElement("p");
    tcp1ltext.id="tcp1ltextid";
    tcp1ltext.className="tcpl";
    tcp1ltext.innerHTML="Level score:";
    tcp1ltext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp1ldiv.appendChild(tcp1ltext);
    let tcp1rdiv=document.createElement("div");
    tcp1rdiv.id="tcp1rdivid";
    tcp1rdiv.style="position: absolute; top: 0; right: 0; width: 50%; height: 100%;";
    tcp1div.appendChild(tcp1rdiv);
    let tcp1rtext=document.createElement("p");
    tcp1rtext.id="tcp1rtextid";
    tcp1rtext.className="tcpr";
    tcp1rtext.innerHTML=`${yxcs.fs}`;
    tcp1rtext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp1rdiv.appendChild(tcp1rtext);
    document.getElementById("yxguogwzdivid").appendChild(tcp1div);
    let tcp2div=document.createElement("div");
    tcp2div.id="tcp2divid";
    tcp2div.style="position: absolute; top: 55%; left: 10%; width: 80%; height: 15%;";
    let tcp2ldiv=document.createElement("div");
    tcp2ldiv.id="tcp2ldivid";
    tcp2ldiv.style="position: absolute; top: 0; left: 0; width: 70%; height: 100%;";
    tcp2div.appendChild(tcp2ldiv);
    let tcp2ltext=document.createElement("p");
    tcp2ltext.id="tcp2ltextid";
    tcp2ltext.className="tcpl";
    tcp2ltext.innerHTML="Time bonus score:";
    tcp2ltext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp2ldiv.appendChild(tcp2ltext);
    let tcp2rdiv=document.createElement("div");
    tcp2rdiv.id="tcp2rdivid";
    tcp2rdiv.style="position: absolute; top: 0; right: 0; width: 50%; height: 100%;";
    tcp2div.appendChild(tcp2rdiv);
    let tcp2rtext=document.createElement("p");
    tcp2rtext.id="tcp2rtextid";
    tcp2rtext.className="tcpr";
    tcp2rtext.innerHTML=`${10*yxcs.gkhssj}`;
    tcp2rtext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp2rdiv.appendChild(tcp2rtext);
    document.getElementById("yxguogwzdivid").appendChild(tcp2div);
    let tcp3div=document.createElement("div");
    tcp3div.id="tcp3divid";
    tcp3div.style="position: absolute; top: 70%; left: 10%; width: 80%; height: 15%;";
    let tcp3ldiv=document.createElement("div");
    tcp3ldiv.id="tcp3ldivid";
    tcp3ldiv.style="position: absolute; top: 0; left: 0; width: 50%; height: 100%;";
    tcp3div.appendChild(tcp3ldiv);
    let tcp3ltext=document.createElement("p");
    tcp3ltext.id="tcp3ltextid";
    tcp3ltext.className="tcpl";
    tcp3ltext.innerHTML="Total score:";
    tcp3ltext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp3ldiv.appendChild(tcp3ltext);
    let tcp3rdiv=document.createElement("div");
    tcp3rdiv.id="tcp3rdivid";
    tcp3rdiv.style="position: absolute; top: 0; right: 0; width: 50%; height: 100%;";
    tcp3div.appendChild(tcp3rdiv);
    let tcp3rtext=document.createElement("p");
    tcp3rtext.id="tcp3rtextid";
    tcp3rtext.className="tcpr";
    tcp3rtext.innerHTML=`${yxcs.fs+10*yxcs.gkhssj}`;
    tcp3rtext.style="margin: 0; color:#000; font-size:0.5rem; font-weight:bold;";
    tcp3rdiv.appendChild(tcp3rtext);
    document.getElementById("yxguogwzdivid").appendChild(tcp3div);
    //
    //附带创建暂停div,初始隐藏
    let yxztdiv=document.createElement("div");
    yxztdiv.id="yxztdivid";
    yxztdiv.style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;";
    yxztdiv.style.zIndex=39;
    yxztdiv.style.visibility="hidden";
    yxztdiv.style.opacity=0.75;
    let beijinimage=document.createElement("img");
    beijinimage.src="img/game_back1.jpg";
    beijinimage.style="width: 100%; height: 100%;";
    yxztdiv.appendChild(beijinimage);
    yxzhudiv.appendChild(yxztdiv);
    //在暂停div中加载游戏logo，
    let fmlogodiv=document.createElement("div");
    fmlogodiv.style="position: absolute; top: 0; width: 34%; left: 33%;height: 50%;";
    yxztdiv.appendChild(fmlogodiv);
    let fmlogoimg=document.createElement("img");
    fmlogoimg.src="img/logo.png";
    fmlogoimg.style="position: absolute; width: 100%;top: 50%; transform: translateY(-50%);";
    fmlogodiv.appendChild(fmlogoimg);
    //在暂停div中加载按钮区，在按钮区中加载声音，返回游戏，退回主菜单按钮。
    let yxztbtndiv=document.createElement("div");
    yxztbtndiv.id="yxztdivid";
    yxztbtndiv.style="position: absolute; left: 20%; top: 60%; width: 60%; height: 20%;";
    yxztdiv.appendChild(yxztbtndiv);
    let yxztsybtnimg=document.createElement("img");
    yxztsybtnimg.id="yxztsybtnimgid"
    yxztsybtnimg.src="img/sound2.png";
    yxztsybtnimg.style="position: absolute; height: 100%;left: 25%; transform: translateX(-50%);";
    yxztsybtnimg.className="kean";
    yxztsybtnimg.addEventListener("click",function(){yxyinxiao();})
    yxztbtndiv.appendChild(yxztsybtnimg);
    let yxztjxbtnimg=document.createElement("img");
    yxztjxbtnimg.src="img/close.png";
    yxztjxbtnimg.style="position: absolute; height: 100%;left: 50%; transform: translateX(-50%);";
    yxztjxbtnimg.className="kean";
    yxztjxbtnimg.addEventListener("click",function(){yxzantin();})
    yxztbtndiv.appendChild(yxztjxbtnimg);
    let yxzttcbtnimg=document.createElement("img");
    yxzttcbtnimg.src="img/quit.png";
    yxzttcbtnimg.style="position: absolute; height: 100%;left: 75%; transform: translateX(-50%);";
    yxzttcbtnimg.className="kean";
    yxzttcbtnimg.addEventListener("click",function(){yxtuichu();})
    yxztbtndiv.appendChild(yxzttcbtnimg);
    //
    //附带创建通关div,初始隐藏
    let yxtongdiv=document.createElement("div");
    yxtongdiv.id="yxtongdivid";
    yxtongdiv.style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;";
    yxtongdiv.style.zIndex=39;
    yxtongdiv.style.visibility="hidden";
    let tongimage=document.createElement("img");
    tongimage.src="img/congratulations.jpeg";
    tongimage.style="width: 100%; height: 100%;";
    tongimage.addEventListener("click",function(){yxtuichu();})
    yxtongdiv.appendChild(tongimage);
    yxzhudiv.appendChild(yxtongdiv);
    //
    //附带创建gameover div,初始隐藏
    let yxgoverdiv=document.createElement("div");
    yxgoverdiv.id="yxgoverdivid";
    yxgoverdiv.style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;";
    yxgoverdiv.style.zIndex=39;
    //yxgoverdiv.style.opacity=0.8;
    yxgoverdiv.style.visibility="hidden";
    let guogimage1=document.createElement("img");
    guogimage1.src="img/back.png";
    guogimage1.style="position: absolute;width: 100%; height: 100%;";
    yxgoverdiv.appendChild(guogimage1);
    let yxgoverimage=document.createElement("img");
    yxgoverimage.src="img/game over.png";
    yxgoverimage.style="position: absolute; width: 80%; left:10%; top:50%; transform: translateY(-50%);";
    //yxgoverdiv.addEventListener("click",function(){guogzc();})
    yxgoverdiv.appendChild(yxgoverimage);
    let fminfbtnimage=document.createElement("img");
    fminfbtnimage.src="img/quit.png";
    fminfbtnimage.style="position: absolute; top: 10%; left: 90%;width: 10%;transform: translateX(-50%);";
    fminfbtnimage.className="kean";
    fminfbtnimage.addEventListener("click",function(){yxtuichu();})
    yxgoverdiv.appendChild(fminfbtnimage);
    yxzhudiv.appendChild(yxgoverdiv);
    //
    //加载游戏区
    //youxiplaydiv(1);
    //测试用，选关加载
    youxiplaydiv(yxcs.gk);
}
//
//封面继续游戏
function fmcontinue(){
    let lsgk=Number(localStorage.lv);
    let lsfs=Number(localStorage.score);
    yxcs.gk=lsgk;
    yxcs.fs=lsfs;
    fmplay();
}

//游戏过关界面
function guoguan(){
    yxjiesuan();
    if (typeof(Storage)!=="undefined") {
        if (typeof(localStorage.lv)!=="undefined"){
            //console.log("localStorage.lv:"+localStorage.lv);  
            let lsgk=Number(localStorage.lv);
            if (yxcs.gk>=lsgk){localStorage.lv=yxcs.gk+1;localStorage.score=yxcs.fs;}
            if (yxcs.gk>=50) {localStorage.clear();}
        } else {localStorage.lv=yxcs.gk;localStorage.score=yxcs.fs;}
} else {   
console.log("抱歉! 不支持 web 存储。");   
}
    if (yxcs.gk<50) {
        document.getElementById("yxguogdivid").style.visibility="visible";
    } else {
        document.getElementById("yxtongdivid").style.visibility="visible";
    }
    
}
//
//游戏结束界面
function yxover(){
    document.getElementById("yxgoverdivid").style.visibility="visible";
}
//
//过关转场：过关则下一关，失败则重新开始本关，暂停则继续/不用管。
function guogzc(){
    if (yxcs.zt==1) {} else {
        if (yxcs.gg==1) {
            //游戏下一关
            yxcs.gg=0;
            yxcs.gk+=1;
            
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

}
//
//游戏结算
function yxjiesuan(){
    document.getElementById("tcp1rtextid").innerHTML=`${yxcs.gkdf}`;
    document.getElementById("tcp2rtextid").innerHTML=`${10*yxcs.gkhssj}`;
    document.getElementById("tcp3rtextid").innerHTML=`${yxcs.fs+10*yxcs.gkhssj}`;
    yxcs.fs=yxcs.fs+10*yxcs.gkhssj;
}
//游戏退出，退回封面
function yxtuichu() {
    location.reload();
    //new zhudiv();
}