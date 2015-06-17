$(document).ready(function(){
	$("#loadMore").click(function(){
		getMore();
	});

	//获取更多文章
	function getMore(){
		var url="/message?args=[123]";
		getData(url);
	}
});
function getData(url){
	$.ajax({
		type:'get',
		url:url,
		dataType:'json',
		success:function(d){
			console.log(d);
		}
	});
}