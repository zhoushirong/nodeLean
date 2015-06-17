var express = require('express');
//var filter = require('./lib/filter');
var app = express();
var path=require('path');//引用path模块
//加载hbs模块
var hbs=require('hbs');
//加载数据模块
var bodyParser = require('body-parser')
var ejsTemp=require('ejs');
var articles=require('./data/articles')();
//运行ejs模块
app.engine('.html',ejsTemp.__express);
// 设定views变量，意为视图存放的目录
app.set('views',path.join(__dirname,'views'));
//指定模板文件的后缀名为html
app.set('view engine','html'); 

// 设定静态文件目录，比如本地文件,目录为demo/public/images，访问网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, '/')));



//app.use(bodyParser());

var router=express.Router();

//router.get("path","")path：指新的访问地址
//res.render('index') 就是指，把子目录views下面的index.html文件，交给模板引擎hbs渲染。
router.get('/',function(req,res){console.log(articles);
	res.render('visitor/index',{articles:articles});
	res.end();
});

// router.get('/article/:id', function(req, res) {
// 	ejs.getBlogEntry(req.params.id,function(d){
// 		res.render('visitor/article',{title:d.title,blog:d});
// 	})
// });

// router.get('/about',function(req,res){
// 	res.render('user/about', {title:"自我介绍"});
//  });
// router.get('/login',function(req,res){
// 	res.render('user/login', {title:"登录"});
//  });
// router.get('/signup',function(req,res){
// 	res.render('user/signup', {title:"注册"});
//  });

// app.get('/message',function(req,res,next){ //  get请求返回json
// 	var url=req.url;
// 	var args=url.replace(/.+args=/,'');

//     res.send({status:'json',"args":args});
// });

app.use('/',router);
app.listen(3000);

