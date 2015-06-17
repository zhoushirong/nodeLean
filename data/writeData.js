var fs=require("fs");
var path=require("path");

// fs.writeFile(filename, data, [options], callback)
// filename为具体的文件保存路径地址,
// data为具体要写入文件的数据对象,
// [options]为具体的保存文件配置，编码格式等,
// callback为具体的回调函数，进行相应的错误捕捉及提示。
function writeFile(data){
	fs.writeFile(path.join(__dirname, 'jsonData.js'),JSON.stringify(data),{encoding:'utf-8'},function(err){
		if(err){
			console.log(err);
		}else{
			console.log("数据写入成功！");
		}
	});
}
writeFile({"test":"test"});
exports.writeData=writeFile;













