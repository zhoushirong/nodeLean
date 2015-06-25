//登录
//by zsr 
//2015-06-25
//**********************************
var mysql=require("mysql");
var config=require("../config/config");

module.exports=function(userArr){
	var connection = mysql.createConnection(config.mysqlConfig());
	connection.connect();
	var checkLogin = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkLogin, function(err, rows, fields) {
		if (err) throw err;
		console.log('checkLogin from user success!');
		console.log(userArr[0]+" | "+rows+" | "+rows.length);
		if(rows.length > 0){
			console.log("登录成功！");
			connection.end();
		}else{
			console.log("用户不存在");
		}
	});
}

















