// blog.js文件
//取得数据
var reqData=require('../mod/sql').getData;

reqData(function(data){
    exports.getBlogEntries = function (callback){
        callback(data);
    };

    exports.getBlogEntry = function (id,callback){
        for(var i=0; i < data.length; i++){
            if(data[i].id == id){
                callback(data[i]);
            }
        }
    };
});




