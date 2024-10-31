let http = require('http')
http.createServer(function(req, res){
    res.write('Hello server');
    res.end();
}).listen(6000);
