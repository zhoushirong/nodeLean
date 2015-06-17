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
function writeFile(data){
	fs.appendFile(path.join(__dirname, 'jsonData.js'),JSON.stringify(data),{encoding:'utf-8'},function(err){
		if(err){
			console.log(err);
		}else{
			console.log("数据写入成功！");
		}
	});
}
var arr=[];
for(var i=1;i<100;i++){
	var obj={"id":i, "title":"第"+i+"篇文章的标题", "body":"第"+i+"篇文章的内容", "published":"6/2/2013"};
	arr.push(obj);
}
writeFile(arr);
exports.writeData=writeFile;













