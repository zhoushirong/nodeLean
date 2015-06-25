//清除数据库中的数据
//by zsr 
//2015-06-25
//此操作需谨慎
//**********************************

var mysql=require("mysql");
var config=require("../config/config");
var connection = mysql.createConnection(config.mysqlConfig());
connection.connect();

var deleteDataTable1="truncate table user";
var deleteDataTable2="truncate table article";

connection.query(deleteDataTable1, function(err, rows, fields) {
	if (err) throw err;
	console.log('delete usertable success!');
});
connection.query(deleteDataTable2, function(err, rows, fields) {
	if (err) throw err;
	console.log('delete articletable success!');
});
connection.end();
















