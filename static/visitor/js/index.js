$(document).ready(function(){
	
	$("#loadMore").click(function(){
		getMore();
	});

	//获取更多文章
	function getMore(){
		$.get("http://127.0.0.1:3001/message?args=[1234]",function(d){
			//alert(d);
		});
		// $.ajax({
		//   type: 'POST',
		//   url: "http://127.0.0.1:3001",
		//   ars:"message"
		//   data: {"id":1,"data":123},
		//   success: function(d){},
		//   dataType: "json"
		// });
	}
});