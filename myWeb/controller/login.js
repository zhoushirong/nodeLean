var checkLogin=require("../model/login");

//处理登录模块
function dealLogin(data,callback){
	var dataArr=[];
	for(var i in data){
		dataArr.push(data[i]);
	}
	dataArr.push(new Date().getTime())
	checkLogin(dataArr,callback);
};
module.exports = dealLogin;