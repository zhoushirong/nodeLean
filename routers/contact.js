function Contact(){
    this.exec = function(route, req, res){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('This is </b>Contact Page</b>');
    }
}

module.exports = new Contact();