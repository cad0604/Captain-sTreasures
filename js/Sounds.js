    //5.2.1声音初始化，实现游戏载入时便播背景音乐
    function bgmkaishi(){
        //背景音乐
		if(!document.getElementById("bgmcsid")){
			let bgmcs=document.createElement("audio");
			bgmcs.id="bgmcsid";
			let bgmcsogg=document.createElement("source");
			bgmcsogg.src="sound/bgmcs.ogg";
			bgmcsogg.type="audio/ogg";
			bgmcs.appendChild(bgmcsogg);
			let bgmcsmpeg=document.createElement("source");
			bgmcsmpeg.src="sound/bgmcs.mp3";
			bgmcsmpeg.type="audio/mpeg";
			bgmcs.appendChild(bgmcsmpeg);
			document.body.appendChild(bgmcs);
		}
		var bgm=document.getElementById("bgmcsid"); 
		bgm.play();
		bgm.loop = true;
        //bgm.muted=true;
        //
        //音效
        if(!document.getElementById("yinxiaocsid")){
			let yinxiaocs=document.createElement("audio");
			yinxiaocs.id="yinxiaocsid";
			let yinxiaocsogg=document.createElement("source");
			yinxiaocsogg.src="sound/yinxiaocs.ogg";
			yinxiaocsogg.type="audio/ogg";
			yinxiaocs.appendChild(yinxiaocsogg);
			let yinxiaocsmpeg=document.createElement("source");
			yinxiaocsmpeg.src="sound/yinxiaocs.mp3";
			yinxiaocsmpeg.type="audio/mpeg";
			yinxiaocs.appendChild(yinxiaocsmpeg);
			document.body.appendChild(yinxiaocs);
		}
		var yinxiao=document.getElementById("yinxiaocsid"); 
		yinxiao.loop = false;
        //初始无声
        //yinxiao.muted=true;
		        //音效2
				if(!document.getElementById("yinxiao2id")){
					let yinxiao2=document.createElement("audio");
					yinxiao2.id="yinxiao2id";
					let yinxiao2ogg=document.createElement("source");
					yinxiao2ogg.src="sound/yinxiao2.ogg";
					yinxiao2ogg.type="audio/ogg";
					yinxiao2.appendChild(yinxiao2ogg);
					let yinxiao2mpeg=document.createElement("source");
					yinxiao2mpeg.src="sound/yinxiao2.mp3";
					yinxiao2mpeg.type="audio/mpeg";
					yinxiao2.appendChild(yinxiao2mpeg);
					document.body.appendChild(yinxiao2);
				}
				var yinxiao2=document.getElementById("yinxiao2id"); 
				yinxiao2.loop = false;
				//初始无声
				//yinxiao.muted=true;
	}
	//
    //5.2.2声音图标（暂停）功能函数
 function yxyinxiao(){
		var bgm=document.getElementById("bgmcsid");    //或别的……所有声音，或音乐与音效……
        var yinxiao=document.getElementById("yinxiaocsid"); 
		var yinxiao2=document.getElementById("yinxiao2id"); 
		var sy=document.getElementById("yinxiaoimgid");
		var sy2=document.getElementById("yxztsybtnimgid");
		if(!!bgm.muted){
            bgm.muted=false;
		    bgm.play();
            yinxiao.muted=false;
			yinxiao2.muted=false;
			sy.src="img/sound2.png";
			sy2.src="img/sound2.png";
		}else{
			bgm.muted=true;
			bgm.pause();
            yinxiao.muted=true;
			yinxiao2.muted=true;
			sy.src="img/sound1.png";
			sy2.src="img/sound1.png";
		}
	}
	//