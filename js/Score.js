//关卡，分数与时间等游戏数值
//1.声明一批将要用到的游戏参数：yxcs
var yxcs={
    gk     : new Number,    //关卡数
    lvi    : new Number,    //关卡数对应的数组中的位置
    gkzdsj : new Number,    //json中设定的关卡最大时间限制totaltime
    gkyysj : new Number,    //关卡(暂停后重新)开始时已经用掉的的时间
    gkhssj : new Number,    //关卡还剩多少时间
    fs     : 0,             //游戏得分
    gkdf   : 0,             //本关卡得分
    ljs    : 1,             //连击数，连续得分的累积计数，原游戏中，每主动得分多一次（连击数加1），单次消去的分值多300，初始为1
    wps    : new Number,    //本轮消去的瓦片数，每个瓦片得分300*ljs
    zt     : 0,             //游戏是否暂停，0运行，1暂停。
    gg     : 0,             //游戏是否过关，0未过，1过关。
    jmh    : new Number,    //游戏界面高度
    jmw    : new Number,    //游戏界面宽度
}
//2.游戏开场时的数值初始化
function yxcsh(gks){
    yxcs.gk =lvllist[gks-1].level;
    //let levellist = JSON.parse(JSON.stringify(dataJson.levellist));
    yxcs.gkzdsj=lvllist[gks-1].totaltime;
    yxcs.gkkssj=Date.now();
    //console.log(yxcs.gkzdsj);
    //console.log(yxcs.gkkssj);
    clearInterval(sjdh);
    yxsjdh(0);    //0是游戏已用时间
}
//3.时间动画
function yxsjdh(ys){
    var zsj=yxcs.gkzdsj;      //总时间
    var dqsj=Date.now();      //当前时间
    var zqsj=0;
    zqsj=Date.now();      //之前时间
    var yysj=0;      //已用时间
    var hssj=zsj;      //还剩时间
    yxcs.gkyysj=ys;
    let zt=0;
    sjdh = setInterval(function() {
        zt=yxcs.zt;
        if (zt==0) {
            dqsj=Date.now();
            yysj=ys+Math.floor((dqsj-zqsj)/1000);
            hssj=zsj-yysj;
            yxcs.gkhssj=hssj;
            //console.log("ys:"+dqsj);
            //console.log("yysj:"+zqsj);

            if (hssj>0) {
                document.getElementById("yxsjtextid").innerHTML=`${Math.floor(hssj/60)}:${Math.floor(hssj%60)}`;
                let sjth=(hssj/zsj)*0.63*yxcs.jmh;
                //console.log(sjth);
                document.getElementById("yxsjtdiv2id").style.height=sjth+"px";
                //每200ms一次实现拟随屏变化时间图样的效果，其实没什么必要。
                document.getElementById("yxsjt2imgid").style.height=0.63*yxcs.jmh+"px";
            } else {yxover();}
        }
        else { 
            yxcs.gkyysj=yysj;
            clearInterval(sjdh);
        }
        
    }, 1000 / 5)
}
//
//4.游戏暂停相关功能
function yxzantin(){
    let zt=yxcs.zt;
    if (zt==0) {
        //暂停
        yxcs.zt=1;
        document.getElementById("zantinimgid").src="img/continue.png";
        yxjiesuan();
        document.getElementById("yxztdivid").style.visibility="visible";
    } else {
        //继续
        yxcs.zt=0;
        document.getElementById("zantinimgid").src="img/pause.png";
        yxsjdh(yxcs.gkyysj);
        document.getElementById("yxztdivid").style.visibility="hidden";
    }
}
//
//5.游戏分数
function yxfs(){
    let fs=300*yxcs.ljs*yxcs.wps;
    yxcs.gkdf+=fs;
    yxcs.fs+=fs;
    console.log(yxcs.fs);
    console.log("瓦片数："+yxcs.wps);
    console.log("连击数："+yxcs.ljs);
    document.getElementById("yxscoretextid").innerHTML=`${fs}`;
}
