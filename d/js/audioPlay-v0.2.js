/**
	制作者: wryxmq(马猩猿)
	时间: 2020/10/13
	联系方式: kejiwuxian@protonmail.com
	注: 本js脚本非原创,本人制作收集打包分享
	如有侵权,请提供版权证明联系本人
*/

//引用代码：<script src="audioPlay-v0.2.js"></script>

function audioPlay() {
	//获取播放器id
	var music = document.getElementById("audioPlay-v0.2");  
		console.log(music);
		console.log(music.paused);
	//判读是否播放
	if (music.paused) { 
		music.paused=false;
		//没有就播放
		music.play();
	}     
}
//每0.5秒刷新一次
setInterval("audioPlay()",500);


