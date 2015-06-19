//测试数据准备
//by zsr 
//**********************************

var fs=require("fs");
var path=require("path");

// fs.writeFile(filename, data, [options], callback)
// filename为具体的文件保存路径地址,
// data为具体要写入文件的数据对象,
// [options]为具体的保存文件配置，编码格式等,
// callback为具体的回调函数，进行相应的错误捕捉及提示。
//fs.appendFile追加写入文件
function writeFile(data,filename){
	fs.writeFile(path.join(__dirname, filename),JSON.stringify(data),{encoding:'utf-8'},function(err){
		if(err){
			console.log(err);
		}else{
			console.log("数据写入成功！");
		}
	});
}

//写入文章模拟数据
function writeArticle(){
	var arr=[];
	for(var i=1;i<100;i++){
		var obj={"id":i, "title":"第"+i+"篇文章的标题", "body":"第"+i+"篇文章的内容", "published":"6/2/2013"};
		arr.push(obj);
	}
	writeFile(arr,"../db/articleData.txt");
}

//写入用户信息数据
function writeUser(){
	var arr=[];
	for(var i=1;i<100;i++){
		var obj={
			"id":i,
			"username":"zsrtest"+i,
			"password":"password"+i,
			"sex":(function(){
				if(i%2 === 0){
					return "男";
				}else{
					return "女";
				}
			})(),
			"intro":"自我介绍，我是中国人我哎中国"+i
		}
		arr.push(obj);
	}
	writeFile(arr,"../db/userData.txt");
}

function init(){
	writeArticle();
	writeUser();
}
init();













