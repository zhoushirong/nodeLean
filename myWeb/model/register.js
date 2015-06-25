//注册
//by zsr 
//2015-06-25
//**********************************
var mysql=require("mysql");
var config=require("../config/config");

module.exports=function(userArr){
	var connection = mysql.createConnection(config.mysqlConfig());
	connection.connect();
	var checkUser = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkUser, function(err, rows, fields) {
		if (err) throw err;
		console.log('checkUser from user success!');
		console.log(userArr[0]+" | "+rows+" | "+rows.length);
		if(rows.length > 0){
			console.log("已经注册过了！");
			connection.end();
		}else{
			connection.end();
			var connection2 = mysql.createConnection(config.mysqlConfig());
			connection2.connect();
			var inserUser="INSERT INTO user(userName,password,sex,intro,regTime)"
					+" VALUES("
					+"'"+userArr[0]+"',"
					+"'"+userArr[1]+"',"
					+"'"+userArr[2]+"',"
					+"'"+userArr[3]+"',"
					+"'"+userArr[4]+"')";

			connection2.query(inserUser, function(err, rows, fields) {
				if (err) throw err;
				console.log('insert usertable success!');
				console.log("注册成功！");
				connection2.end();
			});
		}
	});
}

















