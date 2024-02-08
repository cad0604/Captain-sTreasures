//关卡场景
//关卡数，初始为1
var guankas=1;
//关卡颜色数目。在导入场景时定义
var yssm;
//宝石图片源路径
var baossrc=['img/a0000.png','img/a0001.png','img/a0002.png','img/a0003.png','img/a0004.png','img/a0005.png','img/a0006.png','img/a0007.png'];
//宝石颜色数据
var bssrcsj= new Array(9); //表格有9行
for(let i = 0;i < bssrcsj.length; i++){
    bssrcsj[i] = new Array(11); //每行有11列
}
//宝石id数据
var bsid= new Array(9); //表格有9行
for(let i = 0;i < bsid.length; i++){
    bsid[i] = new Array(11); //每行有11列
    for(let j = 0;j < bsid[i].length; j++){
        bsid[i][j]=`bsid${i}${j}`;
    }
}
//瓦片id数据
var wpid= new Array(7); //表格有7行
for(let i = 0;i < wpid.length; i++){
    wpid[i] = new Array(10); //每行有10列
    for(let j = 0;j < wpid[i].length; j++){
        wpid[i][j]=`wpid${i}${j}`;
    }
}
//关卡瓦片数据
var gkwpsj= new Array(7); //表格有7行
for(let i = 0;i < gkwpsj.length; i++){
    gkwpsj[i] = new Array(10); //每行有10列
}
//记录是否有瓦片三石同色的临时瓦片数据，每次用完/或用前都要记得归0。
var lswpsj= new Array(7); //表格有7行
for(let i = 0;i < lswpsj.length; i++){
    lswpsj[i] = new Array(10); //每行有10列
}
//记录宝石消去、产生、运动数据的bsxsyd，每次用完/或用前都要记得归0。
var bsxsyd= new Array(9); //表格有9行
for(let i = 0;i < bsxsyd.length; i++){
    bsxsyd[i] = new Array(11); //每行有11列
}
//三颗戏法宝石id。
    var xfbsid= ['xfbs0','xfbs1','xfbs2'];
//console.log(bsid);
//鼠标在瓦片上的位置
var sbwpwz= new Array(2);
var sbdjwz= new Array(2);
var sbdjwpwz = new Array(2);
//旋转时的宝石临时位置（与颜色）
var bslswz= new Array(3);
for(let i = 0;i < bslswz.length; i++){
    bslswz[i] = new Array(3); 
}
//箭头动画与Src
var jttimer;
var jtsrc=['img/jiantou00.png','img/jiantou01.png','img/jiantou02.png'];
//宝石生成与运动的动画
var sddh;
//游戏时间动画
var sjdh
//分配json数据
//
//游戏内菜单
function youximenu(){
    //创建游戏菜单div
    let yxmenudiv=document.createElement("div");
    yxmenudiv.style="position: absolute; top: 5%; left: 0; width: 100%; height: 12%;";
    //添加音乐按钮
    let yinyueimg=document.createElement("img");
    yinyueimg.src="img/debug.png";
    //let yysrc="img/music1.png";
    //yinyueimg.src=yysrc;
    yinyueimg.style="position: absolute; width:auto; height: 100%;left: 10%; transform: translateX(0%);";
    yinyueimg.className="kean";
    //测试用，将其替换为直接过关的功能。
    yinyueimg.addEventListener("click",function(){yxcs.gg=1;guoguan();})
    //关卡编辑使用，将其替换为上一关
    //yinyueimg.addEventListener("click",function(){xyguan();})
    yinyueimg.style.visibility="hidden";
    yxmenudiv.appendChild(yinyueimg);
    //
    //添加音效按钮
    let yinxiaoimg=document.createElement("img");
    yinxiaoimg.id="yinxiaoimgid";
    yinxiaoimg.src="img/sound2.png";
    yinxiaoimg.style="position: absolute; width:auto; height: 100%;left: 0; transform: translateX(30%);";
    yinxiaoimg.className="kean";
    yinxiaoimg.addEventListener("click",function(){yxyinxiao();})
    //关卡编辑使用，将其替换为下一关
    //yinxiaoimg.addEventListener("click",function(){syguan();})
    yxmenudiv.appendChild(yinxiaoimg);
    //
    //添加退出按钮
    let tuichuimg=document.createElement("img");
    tuichuimg.src="img/quit.png";
    tuichuimg.style="position: absolute; width:auto; height: 100%;right: 0; transform: translateX(-30%);";
    tuichuimg.className="kean";
    tuichuimg.addEventListener("click",function(){yxtuichu();})
    yxmenudiv.appendChild(tuichuimg);
    //   
    //添加全屏按钮
    let quanpinimg=document.createElement("img");
    quanpinimg.id="quanpinimgid";
    quanpinimg.src="img/fullscreen-on.png";
    quanpinimg.style="position: absolute; width:auto; height: 100%;right: 0; transform: translateX(-145%);";
    quanpinimg.className="kean";
    quanpinimg.addEventListener("click",function(){yxquanpin(document.documentElement);})
    yxmenudiv.appendChild(quanpinimg);
    //  
    //添加暂停按钮
    let zantinimg=document.createElement("img");
    zantinimg.id="zantinimgid"
    zantinimg.src="img/pause.png";
    zantinimg.style="position: absolute; width:auto; height: 100%;right: 0; transform: translateX(-260%);";
    zantinimg.className="kean";
    zantinimg.addEventListener("click",function(){yxzantin();})
    yxmenudiv.appendChild(zantinimg);
    // 
    document.getElementById("yxplaydiv0id").appendChild(yxmenudiv);
}
//等级和分数
function youxilevel(){
    let yxleveldiv=document.createElement("div");
    yxleveldiv.id="yxleveldivid";
    yxleveldiv.style="position: absolute; top: 7.2%; left: 50%; height: 6.6%; transform: translateX(-50%);";
    //等级
    let yxleveltext=document.createElement("p");
    yxleveltext.id="yxleveltextid";
    yxleveltext.className="miaobian";
    yxleveltext.innerHTML=`Level-${yxcs.gk}`;
    yxleveltext.style="margin: 0; color:#fff; font-size:0.5rem; font-weight:bold;";
    yxleveldiv.appendChild(yxleveltext);
    document.getElementById("yxplaydiv0id").appendChild(yxleveldiv);
    //分数
    let yxscorediv=document.createElement("div");
    yxscorediv.id="yxscoredivid";
    yxscorediv.style="position: absolute; top: 15.2%; left: 50%; height: 6.6%; transform: translateX(-50%);";
    let yxscoretext=document.createElement("p");
    yxscoretext.id="yxscoretextid";
    yxscoretext.className="miaobian";
    yxscoretext.innerHTML=yxcs.fs;
    yxscoretext.style="margin: 0; color:#fff; font-size:0.5rem; font-weight:bold;";
    yxscorediv.appendChild(yxscoretext);
    document.getElementById("yxplaydiv0id").appendChild(yxscorediv);
}
//时间图样
function youxitimemap(){
    //时间图div
    let yxsjtdiv=document.createElement("div");
    yxsjtdiv.id="yxsjtdivid";
    yxsjtdiv.style="position: absolute; top: 23%; left: 90%; height: 64%; transform: translateX(-50%);";
    //添加时间背景图片
    let yxsjt1img=document.createElement("img");
    yxsjt1img.src="img/jdt1.png";
    yxsjt1img.style="position: absolute; width:auto; height: 100%;left: 50%; transform: translateX(-50%);";
    //yxsjt1img.style="position: absolute; width:auto; height: 100%;";
    yxsjtdiv.appendChild(yxsjt1img);
    // 
    //时间图div2，为后续动画化而设，style px化。
    let yxsjtdiv2=document.createElement("div");
    yxsjtdiv2.id="yxsjtdiv2id";
    yxsjtdiv2.style="overflow:hidden; position: absolute; bottom: 0.77%; left: 50%; transform: translateX(-50%);";
    yxsjtdiv2.style.width=0.06*yxcs.jmh+"px";
	yxsjtdiv2.style.height=0.63*yxcs.jmh+"px";
    yxsjtdiv.appendChild(yxsjtdiv2);
    //添加时间效果图片
    let yxsjt2img=document.createElement("img");
    yxsjt2img.id="yxsjt2imgid"
    yxsjt2img.src="img/jdt2.png";
    yxsjt2img.style="position: absolute; width:auto; bottom: 0; left: 50%; transform: translateX(-50%);";
    yxsjt2img.style.height=0.63*yxcs.jmh+"px";
    yxsjtdiv2.appendChild(yxsjt2img);
    document.getElementById("yxplaydiv0id").appendChild(yxsjtdiv);
    // 
    //时间文本div
    let yxsjtextdiv=document.createElement("div");
    yxsjtextdiv.id="yxsjtextdivid";
    yxsjtextdiv.style="position: absolute; top: 89%; left: 90%; height: 5.2%; transform: translateX(-50%);";
    //添加时间文本
    let yxsjtext=document.createElement("p");
    yxsjtext.id="yxsjtextid";
    yxsjtext.className="miaobian";
    //yxsjtext.innerHTML="59:59";
    yxsjtext.style="margin: 0; color:#fff; font-size:0.4rem; font-weight:bold;";
    yxsjtextdiv.appendChild(yxsjtext);
    document.getElementById("yxplaydiv0id").appendChild(yxsjtextdiv);
    // 
}
//0.游戏区
function youxiplaydiv(gks){
    //关卡得分清0
    yxcs.gkdf=0;
    //创建游戏游戏区div,如果不存在的话
    if (typeof yxplaydiv0 == "undefined") {
        var yxplaydiv0=document.createElement("div");
        yxplaydiv0.id="yxplaydiv0id";
        yxplaydiv0.style="position: absolute; left: 0%; top: 0%; width: 100%; height: 100%;";
        document.getElementById("yxzhudivid").appendChild(yxplaydiv0);
    } else {yxplaydiv0=document.getElementById("yxplaydiv0id");}
    if (typeof yxplaydiv == "undefined") {
        var yxplaydiv=document.createElement("div");
        yxplaydiv.id="yxplaydivid";
        yxplaydiv.style="position: absolute; left: 8%; top: 30%; width: 73%; height: 60%;";
        document.getElementById("yxplaydiv0id").appendChild(yxplaydiv);
    } else {yxplaydiv=document.getElementById("yxplaydivid");}
    //从datajson数据中找出对应关卡的数组位置
    for (let i=0;i<50;i++){
        let dgk=lvllist[i].level;
        //console.log(lvllist[i].level);
        console.log(dgk);
        if (dgk==gks){yxcs.lvi=i;}
    }
    //1.导入关卡场景:瓦片和宝石
    guankacj(yxcs.lvi+1);
        //加载游戏内菜单yxmenu
        youximenu();
        //加载等级和分数
        youxilevel();
        //加载时间图
        youxitimemap();
        //加载声音但是默认不播放
        bgmkaishi();
    //2.监听鼠标位置,根据位置上箭头动画，点击时转动宝石
    yxplaydiv.addEventListener("mousemove",function(jt){ jtyd(jt);});
    yxplaydiv.addEventListener("click",function(dj){ bszd(dj);});
    //yxplaydiv.addEventListener("click",function(dj){ sbdjwz=sbwz(dj);console.log("鼠标点击位置："+sbdjwz);console.log("鼠标瓦片位置："+sbwpwz);});
}
//1.0关卡场景
function guankacj(gks){
    //导入score.js中的数值初始化模块
    yxcsh(gks);
    //宝石颜色数据初始化
    for(let i = 0;i < bssrcsj.length; i++){
        for(let j = 0;j < bssrcsj[i].length; j++){
        bssrcsj[i][j] = null; //每行有11列
        }
    }
    //导入关卡瓦片数据
    //let levellist = JSON.parse(JSON.stringify(dataJson.levellist));
    gkwpsj=lvllist[gks - 1].tiles;
    //console.log(gkwpsj[4][1]);
    //console.log(gkwpsj[1][4]);
    //根据数据创建瓦片
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 10; j++) {
            let wpsj=gkwpsj[i][j];
            //console.log(i+"行"+j+"列："+wpsj);
            //普通瓦片
            cjwp(i,j,wpsj);
            //加锁。懒得算，主要是图源不标准，要处理，反正要处理，直接给处理成两分。整合进cjwp函数里。
        }
    }
    //导入宝石
    //导入关卡颜色数目
    yssm=lvllist[gks - 1].levelColor;
    //console.log(yssm);
    //根据json中的瓦片数据判断是否需要添加宝石
    for (let bi = 0; bi < 9; bi++){
        for (let bj = 0; bj < 6; bj++){
            let bsi=bi;
            let bsj=2*bj+1-(bi%2);
            let lspd=0;
            if(bsi>=0&&bsi<7&&bsj>=0&&bsj<10){lspd=lspd+gkwpsj[bsi][bsj]};
            if(bsi>=0&&bsi<7&&bsj-1>=0&&bsj-1<10){lspd=lspd+gkwpsj[bsi][bsj-1]};
            if(bsi-1>=0&&bsi-1<7&&bsj>=0&&bsj<10){lspd=lspd+gkwpsj[bsi-1][bsj]};
            if(bsi-1>=0&&bsi-1<7&&bsj-1>=0&&bsj-1<10){lspd=lspd+gkwpsj[bsi-1][bsj-1]};
            if(bsi-2>=0&&bsi-2<7&&bsj>=0&&bsj<10){lspd=lspd+gkwpsj[bsi-2][bsj]};
            if(bsi-2>=0&&bsi-2<7&&bsj-1>=0&&bsj-1<10){lspd=lspd+gkwpsj[bsi-2][bsj-1]};
            if (lspd>0){
                cjbs(bsi,bsj,yssm);
            }
        }
    }
    console.log('bssrcsj:');
    console.log(bssrcsj);
    //创建三个变戏法用的宝石图片，初始隐藏。
    for (let i=0;i<3;i++){
        var xfbs=document.createElement("img");
        xfbs.id=xfbsid[i];
        xfbs.className="baoshi";
        xfbs.style="position: absolute; width: auto; height: 12%;transform: translate(-50%,-50%);";
        xfbs.style.visibility="hidden";
        document.getElementById("yxplaydivid").appendChild(xfbs);
    }
    //箭头图片，初始隐藏。
    var jttp=document.createElement("img");
    jttp.id='jttpid';
    jttp.src=jtsrc[0];
    //jttp.style="position: absolute; width: 11.07%; height: 25%;";
    jttp.style.visibility="hidden";
    document.getElementById("yxplaydivid").appendChild(jttp);
}
//
//1.1创建瓦片
function cjwp(i,j,k){
    var wpimg=document.createElement("img");
    wpimg.id=wpid[i][j];
    wpimg.style="position: absolute; width: 10%; height: 25%;";
    wpimg.style.left=j*10+"%";
    wpimg.style.top=i*12.5+"%";
    if (k==0) {wpimg.style.visibility="hidden";} else if (k==1) {
        if ((i+j)%2==1){
            wpimg.src="img/back2.png";
        }else{
            wpimg.src="img/back1.png";
        }
    }else if(k==2){
        if ((i+j)%2==1){
            wpimg.src="img/lock2.png";
        }else{
            wpimg.src="img/lock1.png";
        }
    }/*else{
        if ((i+j)%2==1){
            wpimg.src="img/back4.png";
        }else{
            wpimg.src="img/back3.png";
        }
    }*/
    document.getElementById("yxplaydivid").appendChild(wpimg);
}
//
//1.2创建宝石
function cjbs(i,j,k){
    //生成宝石源数据
    checkbs(i,j,k);
    let bs=bssrcsj[i][j];
    var bsimg=document.createElement("img");
    bsimg.src=baossrc[bs];
    bsimg.id=bsid[i][j];
    bsimg.className="baoshi";
    bsimg.style="position: absolute; width: auto; height: 12%;transform: translate(-50%,-50%);";
    bsimg.style.left=j*10+"%";
    bsimg.style.top=i*12.5+"%";
    document.getElementById("yxplaydivid").appendChild(bsimg);
}
//1.2.1检测宝石
function checkbs(i,j,k){
    //在前k个数据中随机取宝石
    let sjqs=1+Math.floor(Math.random()*k);
    bssrcsj[i][j]=sjqs;
    //检测三角同色
    if (i>1){
        if(j==0){
            while (bssrcsj[i][j]==bssrcsj[i-2][j]&&bssrcsj[i][j]==bssrcsj[i-1][j+1]){bssrcsj[i][j]=1+Math.floor(Math.random()*k);}
        }else if(j>0&&j<10){
            while (bssrcsj[i][j]==bssrcsj[i-2][j]&&(bssrcsj[i][j]==bssrcsj[i-1][j+1]||bssrcsj[i][j]==bssrcsj[i-1][j-1])){bssrcsj[i][j]=1+Math.floor(Math.random()*k);}
        }else if(j==10){
            while (bssrcsj[i][j]==bssrcsj[i-2][j]&&bssrcsj[i][j]==bssrcsj[i-1][j-1]){bssrcsj[i][j]=1+Math.floor(Math.random()*k);}
        }
    }
}
//
//2.0监听鼠标位置
function sbwz(mme){
	let sbx=mme.clientX;
    let zw=parseInt(document.getElementById("zhujm").style.width);
    let zx=parseInt(document.getElementById("zhujm").style.left);
    let sbbx=100*sbx/zw;
    if (!!zx){sbbx=100*(sbx-zx)/zw;};
	var px=parseInt(document.getElementById("yxplaydivid").style.left);
	let pw=parseInt(document.getElementById("yxplaydivid").style.width);
    let gzx=10*(sbbx-px)/pw;
    //console.log('gzx:'+gzx);
    let sby=mme.clientY;
    let zy=parseInt(document.getElementById("zhujm").style.top);
    let zh=parseInt(document.getElementById("zhujm").style.height);
    let sbby=100*sby/zh;
    if (!!zy){sbby=100*(sby-zy)/zh;};
	var py=parseInt(document.getElementById("yxplaydivid").style.top);
	let ph=parseInt(document.getElementById("yxplaydivid").style.height);
    let gzy=8*(sbby-py)/ph;
    //console.log('gzy:'+gzy);
    if (gzx>0&&gzx<10){
        let zx=Math.floor(gzx);
        let gx=gzx-zx;
        let zy=Math.floor(gzy);
        let gy=gzy-zy;
        sbwpwz[1]=zx;
        var lssby;
        if((zx+zy)%2==0){
            if((gx+gy)>1){lssby=zy;}else{lssby=zy-1;}
        }else{
            if(gy>gx){lssby=zy;}else{lssby=zy-1;}
        };
        if(lssby>=0&&lssby<7){
            sbwpwz[0]=lssby;
            //console.log("dj0:"+sbdjwz);
            //console.log(sbwpwz);
            //返回鼠标在瓦片上的位置
            return sbwpwz;
        };
    }

}
//2.0.1监听点击时的鼠标位置
function sbdjwzf(dj){
	let sbx=dj.clientX;
    let zw=parseInt(document.getElementById("zhujm").style.width);
    let zx=parseInt(document.getElementById("zhujm").style.left);
    let sbbx=100*sbx/zw;
    if (!!zx){sbbx=100*(sbx-zx)/zw;};
	var px=parseInt(document.getElementById("yxplaydivid").style.left);
	let pw=parseInt(document.getElementById("yxplaydivid").style.width);
    let gzx=10*(sbbx-px)/pw;
    //console.log('gzx:'+gzx);
    let sby=dj.clientY;
    let zy=parseInt(document.getElementById("zhujm").style.top);
    let zh=parseInt(document.getElementById("zhujm").style.height);
    let sbby=100*sby/zh;
    if (!!zy){sbby=100*(sby-zy)/zh;};
	var py=parseInt(document.getElementById("yxplaydivid").style.top);
	let ph=parseInt(document.getElementById("yxplaydivid").style.height);
    let gzy=8*(sbby-py)/ph;
    //console.log('gzy:'+gzy);
    if (gzx>0&&gzx<10){
        let zx=Math.floor(gzx);
        let gx=gzx-zx;
        let zy=Math.floor(gzy);
        let gy=gzy-zy;
        sbdjwpwz[1]=zx;
        var lssby;
        if((zx+zy)%2==0){
            if((gx+gy)>1){lssby=zy;}else{lssby=zy-1;}
        }else{
            if(gy>gx){lssby=zy;}else{lssby=zy-1;}
        };
        if(lssby>=0&&lssby<7){
            sbdjwpwz[0]=lssby;
            //console.log("dj0:"+sbdjwz);
            //console.log(sbwpwz);
            //返回点击时鼠标在瓦片上的位置
            return sbdjwpwz;
        };
    }

}
//
//2.1上箭头动画
function jtyd(jt){
    var sbmqwz=sbwz(jt);
    //console.log('sbmqwz:'+sbmqwz);
    //如果在没瓦片的地方或没在游戏区，什么也不发生。
    var jt=document.getElementById("jttpid");
    if (!sbmqwz){jt.style.visibility="hidden";}else if (gkwpsj[sbmqwz[0]][sbmqwz[1]]==0) {jt.style.visibility="hidden";} else {
        if ((sbmqwz[0]+sbmqwz[1])%2==0){
            jt.style="position: absolute; width: 11.07%; height: 25%;";
            jt.style.left=sbmqwz[1]*10+"%";
            jt.style.top=sbmqwz[0]*12.5+"%";
            jt.style.visibility="visible";
        }else{
            //jt.style="position: absolute; width: 11.07%; height: 25%; transform: translate(-50%,-50%);";
            jt.style="position: absolute; width: 11.07%; height: 25%;";
            jt.style.left=(sbmqwz[1]*10-1.07)+"%";
            jt.style.top=sbmqwz[0]*12.5+"%";
            jt.style.transform='rotate(180deg)';
            jt.style.visibility="visible";
        }
        //动画化
        clearInterval(jttimer);
        let jti=1;
        jttimer = setInterval(function() {
                jt.src=jtsrc[jti%3];
                //console.log(jti);
                jti +=1;
            }, 1000/7);
    }
}
//
//2.2宝石转动
function bszd(dj){

    sbdjwz=sbdjwzf(dj);
    //如果点在没瓦片的地方，什么也不发生
    if (gkwpsj[sbdjwz[0]][sbdjwz[1]]==0) {} else {
    //获取鼠标所在的三个宝石的位置与颜色
    if ((sbdjwz[0]+sbdjwz[1])%2==0){
        bslswz=[[sbdjwz[0],sbdjwz[1]+1,bssrcsj[sbdjwz[0]][sbdjwz[1]+1]],[sbdjwz[0]+2,sbdjwz[1]+1,bssrcsj[sbdjwz[0]+2][sbdjwz[1]+1]],[sbdjwz[0]+1,sbdjwz[1],bssrcsj[sbdjwz[0]+1][sbdjwz[1]]]];
    }else{
        bslswz=[[sbdjwz[0],sbdjwz[1],bssrcsj[sbdjwz[0]][sbdjwz[1]]],[sbdjwz[0]+1,sbdjwz[1]+1,bssrcsj[sbdjwz[0]+1][sbdjwz[1]+1]],[sbdjwz[0]+2,sbdjwz[1],bssrcsj[sbdjwz[0]+2][sbdjwz[1]]]];
    }
    //console.log(bslswz);
    bszddh(bslswz);
    }
}
//2.2.1宝石转动动画
function bszddh(bslswz){
        //设置点击无效
        document.getElementById("yxplaydivid").classList.add("notclick");
    //原三宝石隐去,戏法宝石显示
    //箭头动画隐去
    document.getElementById("jttpid").style.visibility="hidden";
    var xfbs= new Array(3);
    for (let i = 0;i < 3; i++){
        xfbs[i]=document.getElementById(xfbsid[i]);
        xfbs[i].src=baossrc[bslswz[i][2]];
        xfbs[i].style.left=bslswz[i][1]*10+"%";
        xfbs[i].style.top=bslswz[i][0]*12.5+"%";
        xfbs[i].style.visibility="visible";
        //三宝石隐藏，交换数据，
        document.getElementById(bsid[bslswz[i][0]][bslswz[i][1]]).style.visibility="hidden";
        bssrcsj[bslswz[i][0]][bslswz[i][1]]=bslswz[(i+2)%3][2];
        document.getElementById(bsid[bslswz[i][0]][bslswz[i][1]]).src=baossrc[bslswz[(i+2)%3][2]];  
    }
    //console.log('bssrcsj1:');
    //console.log(bssrcsj);
    //console.log(bslswz);
    let jsqi=0;//计数器
    let t = setInterval(function() {
        jsqi += 0.1;
        if (jsqi < 0.9) {
            //戏法动画
            if ((sbdjwz[0]+sbdjwz[1])%2==0){
                var xj=[bslswz[0][1],bslswz[1][1]-jsqi,bslswz[2][1]+jsqi];
                var yi=[bslswz[0][0]+2*jsqi,bslswz[1][0]-jsqi,bslswz[2][0]-jsqi];
            }else{
                var xj=[bslswz[0][1]+jsqi,bslswz[1][1]-jsqi,bslswz[2][1]];
                var yi=[bslswz[0][0]+jsqi,bslswz[1][0]+jsqi,bslswz[2][0]-2*jsqi];
                }
            for (let i = 0;i < 3; i++){
                xfbs[i].style.visibility="visible";
                xfbs[i].style.left=xj[i]*10+"%";
                xfbs[i].style.top=yi[i]*12.5+"%";
            }
            //console.log(jsqi);
        }
        else { 
            //如果到达预定位置：显示新宝石;隐藏戏法宝石。          
    for (let j = 0;j < 3; j++){
        //document.getElementById(bsid[bslswz[j][0]][bslswz[j][1]]).style.src=baossrc[bslswz[(j+2)%3][2]];
        document.getElementById(bsid[bslswz[j][0]][bslswz[j][1]]).style.visibility="visible";
        xfbs[j].style.visibility="hidden";
        document.getElementById(xfbsid[j]).style.visibility="hidden";
        console.log(xfbsid[j]);
        console.log(jsqi);
        //console.log(bssrcsj[bslswz[j][0]][bslswz[j][1]]);
    } 
    //如果到达指定位置，显现箭头动画,清除本定时器
    document.getElementById("jttpid").style.visibility="visible";
        //动画结束，调用2.2.2.宝石消去检测程序。
        bsxqu();
        //记录连击数
        if (yxcs.wps>0) {yxcs.ljs+=1;} else {yxcs.ljs=1;}
        //

    //
            clearInterval(t);
        }
        
    }, 1000 / 60)
    //

    

}
//
//2.2.2//3.0宝石消去检测程序。根据宝石数据bssrcsj与关卡瓦片数据gkwpsj生成同色数据lss，根据lss数据改变相关宝石数据bssrcsj与关卡瓦片数据gkwpsj
function bsxqu(){
    clearInterval(sddh);
    //临时瓦片（同色）数据归0
    //console.log(lswpsj);
        for(let wi = 0;wi < lswpsj.length; wi++){
            for(let wj = 0;wj < lswpsj[wi].length; wj++){
                lswpsj[wi][wj]=0;
                //console.log("lswpsj"+i+j+":"+lswpsj[i][j]);
            }
        }
    var lss=lswpsj;
    //console.log(lss);
    //var lsb=bssrcsj;  //写成这样时，似乎视两数据为同一数据的两个不同名字/引用。
    var lsb= new Array(9); //表格有9行
for(let i = 0;i < lsb.length; i++){
    lsb[i] = new Array(11); //每行有11列
    for(let j = 0;j < lsb[i].length; j++){
        lsb[i][j]=bssrcsj[i][j];
    }
}
    //console.log('lsb');
    //console.log(lsb);
    //console.log(lsw);
    //3.1检测三角同色,生成临时同色数组lss。
    for (let si = 0; si < 7; si++) {
            for (let sj = 0; sj < 10; sj++) { 
                //没瓦片的地方什么也不发生
                if (gkwpsj[si][sj]==0) {} else{
            if ((si+sj)%2==0){
                if ((lsb[si][sj+1]==lsb[si+2][sj+1])&&(lsb[si][sj+1]==lsb[si+1][sj])) {lss[si][sj]=1;}
            }else{
                if ((lsb[si][sj]==lsb[si+2][sj])&&(lsb[si][sj]==lsb[si+1][sj+1])) {lss[si][sj]=1;}
            }
        }
        }
    }
        //console.log(lss);
var lsw=gkwpsj;
//3.2根据临时同色数组lss改变临时关卡瓦片数据lsw和临时宝石数据lsb。//顺带记录同色的瓦片数
yxcs.wps=0;
for (let pi = 0; pi < 7; pi++) {
    for (let pj = 0; pj < 10; pj++) {
        if (lss[pi][pj]==1){
            if (lsw[pi][pj]==2) {lsw[pi][pj]=1} else if (lsw[pi][pj]==1) {lsw[pi][pj]=3};
            if ((pi+pj)%2==0) {lsb[pi+1][pj]=0;lsb[pi][pj+1]=0;lsb[pi+2][pj+1]=0;} else {lsb[pi][pj]=0;lsb[pi+2][pj]=0;lsb[pi+1][pj+1]=0;}
            yxcs.wps+=1;
        }
    }
}
yxfs();    //改变游戏分数。
    //4.1.1隐藏所有值为-1的宝石，生成相应颜色的消去动画
    //console.log("lsb2");
    //console.log(lsb);
    //console.log(bssrcsj);
    if (yxcs.wps>0) {
        let jsqi=0;//计数器
        let bsxqt = setInterval(function() {
            if (jsqi < 7) {
                //宝石消去音效
                document.getElementById("yinxiao2id").play();
                //宝石消去动画
                for(let bi = 0;bi < lsb.length; bi++){
                    for(let bj = 0;bj < lsb[bi].length; bj++){
                        if (lsb[bi][bj]==0&&bssrcsj[bi][bj]>0) {
                            document.getElementById(bsid[bi][bj]).src=`img/dx/${bssrcsj[bi][bj]}/10001000${jsqi}.png`;
                        }
                    }
                }
            }
            else { 
                //相应宝石隐藏
                /*for(let bi = 0;bi < lsb.length; bi++){
                    for(let bj = 0;bj < lsb[bi].length; bj++){
                        if (lsb[bi][bj]==0) {
                            document.getElementById(bsid[bi][bj]).style.visibility="hidden";
                        }
                    }
                }*/
                //3.2.2刷新宝石数据……
                bssrcsj=lsb;
                //导入宝石生成与运动的动画
                bssddh();
                clearInterval(bsxqt);
            }
            jsqi += 1;
        }, 1000 / 50)
        //
    
    //3.3根据临时关卡瓦片数据lsw改变关卡瓦片数据gkwpsj并生成相应瓦片场景//附加过关检测数据
    gkwpsj=lsw;
    let guogxh=0;
    for (let gi = 0; gi < 7; gi++) {
        for (let gj = 0; gj < 10; gj++) {
            if (lsw[gi][gj]==1) {
                guogxh+=1;
                if ((gi+gj)%2==1){
                    document.getElementById(wpid[gi][gj]).src="img/back2.png";
                }else{
                    document.getElementById(wpid[gi][gj]).src="img/back1.png";
                }
            } else if(lsw[gi][gj]==2) {
                guogxh+=1;
            } else if(lsw[gi][gj]==3) {
                if ((gi+gj)%2==1){
                    document.getElementById(wpid[gi][gj]).src="img/back4.png";
                }else{
                    document.getElementById(wpid[gi][gj]).src="img/back3.png";
                }
            }
        }
    }
    //3.3.1过关检测。根据关卡瓦片数据判断是否过关。
    if (guogxh==0) {
        yxcs.gg=1;   
        clearInterval(sjdh); 
    }
    } else {
            //设置点击生效
            console.log(yxcs.wps);
    document.getElementById("yxplaydivid").classList.remove("notclick");
    //判断是否过关
    if (yxcs.gg==1) {
        guoguan();
    }
    }
    

}
//
//3.4//4.0根据（新生成的）宝石数据bssrcsj与关卡瓦片数据gkwpsj生成宝石（产生与运动的）动画数据bsxsyd，根据bsxsyd生成相应动画以及新的宝石数据bssrcsj与关卡瓦片数据gkwpsj。
function bssddh(){
    //4.1根据（新生成的）宝石数据bssrcsj与关卡瓦片数据gkwpsj生成宝石（消去，产生与运动的）动画数据bsxsyd
    //4.1.0引入临时宝石动画数据bsxsyd并归0
    for(let di = 0;di < bsxsyd.length; di++){
        for(let dj = 0;dj < bsxsyd[di].length; dj++){
            bsxsyd[di][dj]=0;
        }
    }
    var bsd=bsxsyd;

    bsd=ysbsd(bsd);
    //4.1.2.3根据源数据bsd生成动画：0、无；1、从上往下；2、左上；3、右上；4、原地随机生成
    clearInterval(sddh);
    let jsqi=0;//计数器
     sddh = setInterval(function() {
        jsqi += 1;
        if (jsqi < 9) {
            //宝石运动动画
            for (let i=8; i>=0;i--) {
                for (let j=0; j<11; j++){
            if (bsd[i][j]==1){
                document.getElementById(bsid[i][j]).style.top=(i-2+0.2*jsqi)*12.5+"%";
            }
            if (bsd[i][j]==2){
                document.getElementById(bsid[i][j]).style.left=(j-1+0.1*jsqi)*10+"%";
                document.getElementById(bsid[i][j]).style.top=(i-1+0.1*jsqi)*12.5+"%";
            }
            if (bsd[i][j]==3){
                document.getElementById(bsid[i][j]).style.left=(j+1-0.1*jsqi)*10+"%";
                document.getElementById(bsid[i][j]).style.top=(i-1+0.1*jsqi)*12.5+"%";
            }
        }}
        }
        else { 
            document.getElementById("yinxiaocsid").play();
            for (let i=8; i>=0;i--) {
                for (let j=0; j<11; j++){
                    if (bssrcsj[i][j]>0){
                        //console.log(bsid[i][j]);
                        //console.log(bssrcsj[i][j]);
                        document.getElementById(bsid[i][j]).style.left=j*10+"%";
                        document.getElementById(bsid[i][j]).style.top=i*12.5+"%"; 
                    }

                }}
                //如果还有0号宝石，则继续调用自己/迭代
            var jxdh=0;//继续动画信号
            for (let i=8; i>=0;i--) {
                for (let j=0; j<11; j++){
                    if (bssrcsj[i][j]==0){jxdh+=1}
                }}
                if (jxdh>0) {
                    for(let di = 0;di < bsxsyd.length; di++){
                        for(let dj = 0;dj < bsxsyd[di].length; dj++){
                            bsxsyd[di][dj]=0;
                        }
                    }
                    bsd=bsxsyd;                
                    bsd=ysbsd(bsd);
                    console.log("lsb4");
                    //console.log(lsb);
                    //console.log(bssrcsj);
                    jsqi=0;//计数器
                    } else {
                        document.getElementById("yinxiaocsid").play();
                        bsxqu();
                        clearInterval(sddh);}
                //console.log(jxdh);
                //clearInterval(sddh);
        }        
    }, 1000 / 50)
    //

}
//
//演算并返回宝石动画数据bsd的子程序ysbsd。
function ysbsd(bsd){
    //clearInterval(sddh);
    var lsw=gkwpsj;//关卡瓦片数据
        //console.log("lsb3");
    //console.log(lsb);
    //var lsb=bssrcsj;
    var lsb= new Array(9); //表格有9行
    for(let i = 0;i < lsb.length; i++){
        lsb[i] = new Array(11); //每行有11列
        for(let j = 0;j < lsb[i].length; j++){
            lsb[i][j]=bssrcsj[i][j];
        }
    }
        //4.1.1隐藏所有值为-1的宝石，生成相应颜色的消去动画……根据数据需要，移到了3.2.2临时宝石lsb数据替换原宝石数据bssrcsj之前(替换之后无法生成相应颜色的消去动画)。
        //4.1.2从左下到右上，所有值为-1的宝石均与存在的上级交换src数据并生成相应动画数据，没有上级则随机生成数据。
        
        for (let i=8; i>=0;i--) {
            for (let j=0; j<11; j++){
                if (lsb[i][j]==0){
                    //4.1.2.1生成动画源数据bsd.
                    if (i>1) {
                        if (j>0&&j<10){
                            if ((lsw[i-2][j]>0)||(lsw[i-2][j-1]>0)) {bsd[i][j]=1;} else if (lsw[i-1][j-1]>0) {bsd[i][j]=2;} else if (lsw[i-1][j]>0) {bsd[i][j]=3;} else {bsd[i][j]=4;}
                        }else if (j==10){
                            if (lsw[i-2][j-1]>0) {bsd[i][j]=1;} else if (lsw[i-1][j-1]>0) {bsd[i][j]=2;} else {bsd[i][j]=4;}
                        }else if(j==0){
                            if (lsw[i-2][j]>0) {bsd[i][j]=1;} else if (lsw[i-1][j]>0) {bsd[i][j]=3;} else {bsd[i][j]=4;}
                        }else {bsd[i][j]=4;}
                    }
                    else if (i==1) {
                        if (j>0&&j<10){
                            if (lsw[i-1][j-1]>0) {bsd[i][j]=2;} else if (lsw[i-1][j]>0) {bsd[i][j]=3;} else {bsd[i][j]=4;}
                        }else if(j==0){
                            if (lsw[i-1][j]>0) {bsd[i][j]=3;} else {bsd[i][j]=4;}
                    } else if (j==10) {
                        if (lsw[i-1][j-1]>0) {bsd[i][j]=2;} else {bsd[i][j]=4;}
                    } else {bsd[i][j]=4;}
                }else {bsd[i][j]=4;}
                //4.1.2.3从左下到右上，根据源数据bsd交换src数据并变动位置
                if (bsd[i][j]==1){
                    bssrcsj[i][j]=lsb[i-2][j];
                    bssrcsj[i-2][j]=lsb[i][j];
                    lsb[i-2][j]=bssrcsj[i-2][j];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    //document.getElementById(bsid[bi][bj]).style.visibility="visible";
                    document.getElementById(bsid[i][j]).style.left=j*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-2)*12.5+"%";
                }
                if (bsd[i][j]==2){
                    bssrcsj[i][j]=lsb[i-1][j-1];
                    bssrcsj[i-1][j-1]=lsb[i][j];
                    lsb[i-1][j-1]=bssrcsj[i-1][j-1];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    document.getElementById(bsid[i][j]).style.left=(j-1)*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-1)*12.5+"%";
                }
                if (bsd[i][j]==3){
                    bssrcsj[i][j]=lsb[i-1][j+1];
                    bssrcsj[i-1][j+1]=lsb[i][j];
                    lsb[i-1][j+1]=bssrcsj[i-1][j+1];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    document.getElementById(bsid[i][j]).style.left=(j+1)*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-1)*12.5+"%";
                }
                if (bsd[i][j]==4){
                    bssrcsj[i][j]=1+Math.floor(Math.random()*yssm);
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    console.log('新宝石');
                }
            }
        }
    }
        console.log("bsd");
        console.log(bsd);
        //console.log(!bsd[1][-1]);
        //4.1.2.3从左下到右上，根据源数据变动位置
        /*for (let i=8; i>=0;i--) {
            for (let j=0; j<11; j++){
                if (bsd[i][j]==1){
                    bssrcsj[i][j]=lsb[i-2][j];
                    bssrcsj[i-2][j]=lsb[i][j];
                    lsb[i-2][j]=bssrcsj[i-2][j];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    //document.getElementById(bsid[bi][bj]).style.visibility="visible";
                    document.getElementById(bsid[i][j]).style.left=j*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-2)*12.5+"%";
                }
                if (bsd[i][j]==2){
                    bssrcsj[i][j]=lsb[i-1][j-1];
                    bssrcsj[i-1][j-1]=lsb[i][j];
                    lsb[i-1][j-1]=bssrcsj[i-1][j-1];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    document.getElementById(bsid[i][j]).style.left=(j-1)*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-1)*12.5+"%";
                }
                if (bsd[i][j]==3){
                    bssrcsj[i][j]=lsb[i-1][j+1];
                    bssrcsj[i-1][j+1]=lsb[i][j];
                    lsb[i-1][j+1]=bssrcsj[i-1][j+1];
                    lsb[i][j]=bssrcsj[i][j];
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    document.getElementById(bsid[i][j]).style.left=(j+1)*10+"%";
                    document.getElementById(bsid[i][j]).style.top=(i-1)*12.5+"%";
                }
                if (bsd[i][j]==4){
                    bssrcsj[i][j]=1+Math.floor(Math.random()*yssm);
                    document.getElementById(bsid[i][j]).src=baossrc[bssrcsj[i][j]];
                    console.log('新宝石');
                }
            }
        }   */ 
        return bsd;
}

