//配置文件
var config={
	//数据库配置文件
	mysqlConfig:function(){
		var mysqlconfig={
			  host     : 'localhost',
			  user     : 'root',
			  password : '12345678',
			  database : 'zsrblog'
		};
		return mysqlconfig;
	},
	//端口配置
	portConfig:3003
};

module.exports=config;