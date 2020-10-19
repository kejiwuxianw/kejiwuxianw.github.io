/*弹出框*/
window.MAlert = function(msg,type,callback,time ){
	var icon="";
	if( type === true ){
		icon="icon-true color-green";
	}else if( type === false ){
		icon="icon-false color-red";
	}else{
		icon="icon-gantanhao-copy color-orange";
	}
	var $dom = $('<div class="window-confirm"><div class="wrap-icon"><p class="box-icon iconfont '+ icon +'"></p><p class="text-icon text-center">'+msg+'</p><div>');
	$('body').append($dom);

	if(typeof time=="undefined"){
		time = 1100;
	}else{
		time = Math.max ( parseInt(time) , 1100 );
	}
	var i=setTimeout(function(){
		clearTimeout(i);
		setTimeout(function(){
			$dom.remove();
			if( typeof(callback) == 'function'){
				callback();
			}
		}, 500);
		$dom.css("opacity",0);
	}, time);
};
