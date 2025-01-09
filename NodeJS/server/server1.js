const http =  require ("http");
const fs = require ("fs");
// Create Server

const server = http.createServer(function(req,res){});

// Listen to the server
server.listen(7000, () => {
    console.log("server is up and running");
});

server.on("request", (req, res) =>{
    const url = req.url;

    // login page
    if (url === "/login"){
        fs.readFile("login.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }

     // Home page
     if (url === "/"){
        fs.readFile("index.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }

     // contact page
     if (url === "/contact"){
        fs.readFile("contact.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }

     // coffees page
     if (url === "/coffes"){
        fs.readFile("coffees.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }

     // blog page
     if (url === "/blog"){
        fs.readFile("blog.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }

     // about page
     if (url === "/about"){
        fs.readFile("about.html", (err, data) => {

            if( err) {
                console.log(err);
            } else {
                res.writeHead(200, { "context-type": "text/html"});
                res.write(data);
                res.end();
            }

        });
    }
    


    console.log(url);
});
//  server url= localhost:9000

