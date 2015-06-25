// var fs=require("fs");
// var path=require("path");
var mysql=require("mysql");
var config=require("../config/config");

// module.exports = function(callback){
// 	fs.readFile(path.join(__dirname, '../db/userData.txt'),{encoding:'utf-8'},function(err,data){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log("用户数据读取成功！");
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
	var selectUser="SELECT * FROM user";

	connection.query(selectUser,function(err,rows,fields){
		if (err) throw err;
		console.log("用户数据读取成功！");
		if(typeof callback === "function"){
			callback(rows);
		}
	});
	connection.end();
};