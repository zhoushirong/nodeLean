//var fs=require("fs");
//var path=require("path");
var mysql=require("mysql");
var config=require("../config/config");
// 读取db中的txt文件的方式获取数据
// module.exports = function(callback){
// 	fs.readFile(path.join(__dirname, '../db/articleData.txt'),{encoding:'utf-8'},function(err,data){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log("文章数据读取成功！");
// 			if(typeof callback === "function"){
// 				callback(JSON.parse(data));
// 			}
// 		}
// 	});
// }


module.exports = function(callback){
	//从数据库中获取数据
	var connection=mysql.createConnection(config.mysqlConfig());
	connection.connect();
	var selectArticle="SELECT * FROM article";

	connection.query(selectArticle,function(err,rows,fields){
		if (err) throw err;
		console.log("文章数据读取成功！");
		if(typeof callback === "function"){
			callback(rows);
		}
	});
	connection.end();
};

