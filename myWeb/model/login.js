//登录
//by zsr 
//2015-06-25
//**********************************
var mysql=require("mysql");
var config=require("../config/config");

module.exports=function(userArr,callback){
	var connection = mysql.createConnection(config.mysqlConfig());
	connection.connect();
	var checkLogin = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkLogin, function(err, rows, fields) {
		if (err) throw err;
		if(rows.length > 0){
			if(typeof callback === "function"){
				//登陆成功
				callback({"status":1});
				console.log(1121);
			}
			connection.end();
		}else{
			//登陆失败
			if(typeof callback === "function"){
				callback({"status":0});
			}
			connection.end();
		}

	});
}

















