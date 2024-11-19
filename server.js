let server = http.createServer(function(request, response){
    let body = "Hello world"
    response.writeHead(200,{
        'content-Length': body.length,
        "Content-Type":'text/plain'


    })
    response.end(body);

})

server.listen(8080);