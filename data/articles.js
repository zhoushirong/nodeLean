var fs=require("fs");
var path=require("path");

module.exports = function(callback){
	fs.readFile(path.join(__dirname, 'jsonData.js'),{encoding:'utf-8'},function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log("数据读取成功！");
			if(typeof callback === "function"){
				callback(JSON.parse(data));
			}
		}
	});
}