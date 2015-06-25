//注册
//by zsr 
//2015-06-25
//**********************************
var mysql=require("mysql");
var config=require("../config/config");
var connection = mysql.createConnection(config.mysqlConfig());
connection.connect();

//检测是否已经注册
function checkHas(userArr,callback){
	//var checkUser="SELECT * FROM 'user' WHERE userName='"+userArr[0]+"'";
	var checkUser = "SELECT * FROM user where userName = '"+userArr[0]+"'";
	connection.query(checkUser, function(err, rows, fields) {
		if (err) throw err;
		console.log('checkUser from user success!');
		console.log(rows+" || "+rows.length);
		if(rows.length > 0){
			console.log("已经注册！");
			connection.end();
		}else{
			console.log("没有注册！");
			if(typeof callback === "function"){
				callback();
			}
		}
	});
}
module.exports=function(userArr){
	checkHas(userArr,function(){
		//向user表插入数据
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
		});

		connection.end();
	});
}

















