//测试数据准备
//by zsr 
//2015-06-25
//**********************************

var mysql=require("mysql");
var config=require("../config/config");
var connection = mysql.createConnection(config.mysqlConfig());
connection.connect();
//创建user表
var createUserTable="CREATE TABLE if not exists user("
		+"id int(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',"
		+"userName varchar(255) COMMENT '用户名',"
		+"password varchar(20) COMMENT '密码',"
		+"sex varchar(255) COMMENT '性别',"
		+"intro varchar(255) COMMENT '简介',"
		+"regTime varchar(255) COMMENT '注册时间',"
		+"PRIMARY KEY(id))"
		+" DEFAULT CHARSET=utf8";

connection.query(createUserTable, function(err, rows, fields) {
	if (err) throw err;
	console.log('write usertable success!');
});

//创建文章表
var createArticleTable="CREATE TABLE if not exists article("
		+"id int(8) NOT NULL AUTO_INCREMENT COMMENT '文章id',"
		+"title varchar(255) COMMENT '文章标题',"
		+"content varchar(255) COMMENT '文章内容',"
		+"pubTime varchar(255) COMMENT '发布时间',"
		+"PRIMARY KEY(id))"
		+" DEFAULT CHARSET=utf8";

connection.query(createArticleTable, function(err, rows, fields) {
	if (err) throw err;
	console.log('write articletable success!');
});

//插入测试数据到user表
for(var i=1;i<100;i++){
	var userArr=[];
	userArr.push("zsrtest"+i);
	userArr.push("zsrtest"+i);
	if(i%2 === 0){
		userArr.push("男");
	}else{
		userArr.push("女");
	}
	userArr.push("zsrtest a good main for number "+i);
	userArr.push("2015-06-25");
	var inserUser="INSERT INTO user(userName,password,sex,intro,regTime)"
			+" VALUES("
			+"'"+userArr[0]+"',"
			+"'"+userArr[1]+"',"
			+"'"+userArr[2]+"',"
			+"'"+userArr[3]+"',"
			+"'"+userArr[4]+"')";

	connection.query(inserUser, function(err, rows, fields) {
		if (err) throw err;
		console.log('insert to usertable success!');
	});
}


//插入测试数据到article表
for(var i=1;i<100;i++){
	var articleArr=[];
	articleArr.push("article title"+i);
	articleArr.push("this is a article content "+i);
	articleArr.push("2015-06-25");
	var inserArticle="INSERT INTO article(title,content,pubTime)"
			+" VALUES("
			+"'"+articleArr[0]+"',"
			+"'"+articleArr[1]+"',"
			+"'"+articleArr[2]+"')";

	connection.query(inserArticle, function(err, rows, fields) {
		if (err) throw err;
		console.log('insert to articletable success!');
	});
}

connection.end();
















