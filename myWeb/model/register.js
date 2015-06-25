//注册
//by zsr 
//2015-06-25
//**********************************
var mysql=require("mysql");
var config=require("../config/config");
var connection = mysql.createConnection(config.mysqlConfig());

//检测是否已经注册
function checkHas(userArr,callback){
	//var checkUser="SELECT * FROM 'user' WHERE userName='"+userArr[0]+"'";
	var checkUser = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkUser, function(err, rows, fields) {
		if (err) throw err;
		console.log('checkUser from user success!');
		console.log(rows+" || "+rows.length);
		if(rows.length > 0){
			console.log("已经注册过了！");
			connection.end();
		}else{
			if(typeof callback === "function"){
				callback();
			}
		}
	});
}
module.exports=function(userArr){
	connection.connect();
	var checkUser = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkUser, function(err, rows, fields) {
		if (err) throw err;
		console.log('checkUser from user success!');
		console.log(rows+" || "+rows.length);
		if(rows.length > 0){
			console.log("已经注册过了！");
		}else{
			if(typeof callback === "function"){
				var inserUser="INSERT INTO user(userName,password,sex,intro,regTime)"
						+" VALUES("
						+"'"+userArr[0]+"',"
						+"'"+userArr[1]+"',"
						+"'"+userArr[2]+"',"
						+"'"+userArr[3]+"',"
						+"'"+userArr[4]+"')";

				connection.query(inserUser, function(err, rows, fields) {
					if (err) throw err;
					console.log('insert usertable success!');
					console.log("注册成功！");
					connection.end();
				});
			}
		}
		connection.end();
	});
}

















