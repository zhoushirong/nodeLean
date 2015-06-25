//配置文件
var config={
	//数据库配置文件
	mysqlConfig:function(){
		var mysqlconfig={
			  host     : 'localhost',
			  user     : 'root',
			  password : '123456',
			  database : 'zsrblog'
		};
		return mysqlconfig;
	}
};

module.exports=config;