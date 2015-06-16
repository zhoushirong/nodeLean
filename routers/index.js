function Index(){
    this.exec = function(route, req, res){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('This is </b><strong>Home Page</strong></b>');

  		// route.get('../view/index',function(req,res){
		// 	blogEngine.getBlogEntries(function(d){
		// 		res.render('index',{title:"最近文章", entries:d});
		// 	});
		// });
    }
}

module.exports = new Index();