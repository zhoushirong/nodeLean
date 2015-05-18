//http://assets.example.com/foo/??bar.js,baz.js
//合并文件第二版
var fs=require('fs');
var path=require('path');
var http=require('http');

var MIME={
	'.css':'text/css',
	'.js':'application/javascript'
}
function main(argv){
	var config=argv[0] ? JSON.parse(fs.readFileSync(argv[0],'utf-8')) : {},
		root=config.root || '.',
		port=config.port || 8012,
		server=http.createServer(function(request,response){
		var urlInfo=parseURL(root,request.url);console.log(urlInfo)
		validateFiles(urlInfo.pathnames,function(err,pathnames){
			if(err){
				response.writeHead(404);
				response.end(err.message);
			}else{
				response.writeHead(200,{
					'Content-Type':urlInfo.mime
				})
				outputFiles(pathnames,response);
			}
		});
	}).listen(port);

	process.on('SIGTERM',function(){
		server.close(function(){
			process.exit(0);
		})
	})	
}
//合并文件优化版
function validateFiles(pathnames,callback){
	(function next(i,len){
		if(i<len){
			fs.stat(pathnames[i],function(err,stats){
				if(err){
					callback(err);
				}else if(!stats.isFile){
					callback(new Error());
				}else{
					next(i+1,len)
				}
			})
		}else{
			callback(null,pathnames);
		}
	})(0,pathnames.length);
}
function outputFiles(pathnames,writer){
	(function next(i,len){
		//使用createReadStream读取文件
		var reader=fs.createReadStream(pathnames[i]);
		reader.pipe(writer,{end:false});
		reader.on('end',function(){
			next(i+1,len);
		});
	})(0,pathnames.length);
}
//合并文件
//fs.readFile()异步读取文件
//fs.readFileSync()同步读取文件
function combineFiles(pathnames,callback){
	var output=[];
	(function next(i,len){
		if(i<len){
			//异步读取文件，避免服务器因等待磁盘i/o发生阻塞
			fs.readFile(pathnames[i],function(err,data){
				if(err){
					callback(err);
				}else{
					output.push(data);
					next(i+1,len);
				}
			});
		}else{
			callback(null,Buffer.concat(output));
		}
	})(0,pathnames.length);
}
//返回文件MIME和文件名
function parseURL(root,url){
	var base,pathnames,parts;

	//不知道这一段代码有什么用
	if(url.indexOf('??') === -1){
		url=url.replace('/','/??');
	}
	parts=url.split('??');
	base=parts[0];
	pathnames=parts[1].split(",").map(function(value){
		return path.join(root,base,value)
	});
	//MIME:是描述消息内容类型的因特网标准。MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。
	//path:NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
	return {
		mime:MIME[path.extname(pathnames[0])] || 'text/plain',//获取文件的mime
		pathnames:pathnames
	};
}

//process.argv:包含命令行参数的数组；
//第一个参数是node，第二个参数是文件名称；第3+额外的参数
main(process.argv.slice(2));
//console.log(process.argv.slice(2))