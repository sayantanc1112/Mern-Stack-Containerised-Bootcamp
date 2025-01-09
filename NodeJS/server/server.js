const http =  require ("http");

// Create Server

const server = http.createServer(function(req,res){
    console.log(" Somone has visited your website");

    // response header
    res.writeHead(200, {"Content-Type": "text/html"});
    // send data to the user
    res.write(" Hello, This is my first Node website ");
    // end the response
    res.end();

});

// Listen to the server
server.listen(7000, () => {
    console.log("server is up and running");
});

server.on("request", (req, res) =>{
    console.log(req);
});
//  server url= localhost:9000

