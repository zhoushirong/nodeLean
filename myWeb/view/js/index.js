$(document).ready(function(){
	$("#loadMore").click(function(){
		getMore();
	});
	$("#postText").click(function(){
		postMore();
	});
	
	//获取更多文章
	function getMore(){
		var url="/message?args=[123]";
		getData(url,"get");
	}
	//获取更多文章
	function postMore(){
		var url="/message?args=[123]";
		getData(url,"post");
	}
	updataCache();
});
function getData(url,type){
	$.ajax({
		type:type,
		url:url,
		dataType:'json',
		success:function(d){
			console.log(d);
		}
	});
}
//更新离线缓存
function updataCache(){
	console.log(applicationCache.status);
	applicationCache.addEventListener("updateready",function(){
		// 0	 appCache.UNCACHED	未缓存
		// 1	 appCache.IDLE	闲置
		// 2	 appCache.CHECKING	检查中
		// 3	 appCache.DOWNLOADING	下载中
		// 4	 appCache.UPDATEREADY	已更新
		// 5	 appCache.OBSOLETE	失效

		console.log("updateready");
		//缓存更新之后直接刷新页面
		location.reload();
		console.log(applicationCache.status);
		applicationCache.swapCache();
		console.log(applicationCache.status);
	});
}