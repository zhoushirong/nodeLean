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