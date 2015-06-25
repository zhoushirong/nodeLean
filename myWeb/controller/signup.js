var saveReg=require("../model/register");

//处理注册模块
function dealSignup(data){
	var dataArr=[];
	for(var i in data){
		dataArr.push(data[i]);
	}
	dataArr.push(new Date().getTime())
	saveReg(dataArr);
};
module.exports = dealSignup;