function About(){
    this.exec = function(route, req, res){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('This is </b>About Me</b>');
    }
}

module.exports = new About();