const express = require("express");

const { createFile, createFolder } = require("./utils");
const postsData = require('./data/posts.json');
const app = express();
//console.log(postsData);
//create folder

createFolder("data");

//create file

createFile('data/posts.json', 'content here');

// routing

// app.get = http method
//methods= get/post/put etc. they are fetched from express library

// home route
app.get('/', function(req, res){
    res.send("Home Page route ..");

})

//create a post 
app.post("/post", function(req, res){
    
    res.send ("create post route");
});

//create a post with a dynamic id (id is a parameter here)
app.put("/post/:id", function(req, res){
    // get the dynamic id === params
    const id = req.params.id;
    console.log(id);
    res.send ("update post route");
});

//delete a post 
app.delete("/post/:id", function(req, res){
    
    res.send ("delete post route");
});


//single post 
app.get("/post/:id", function(req, res){
    // get the id of the post
    const id = req.params.id;
    //console.log(id);
    // find post by id
    const postFound = postsData.find((post) => {
        return post.id === id;
    })
    //console.log(postFound);
    if (!postFound){
        res.json({message: 'Post not found'});
    }
    else {
// send the post to user
res.json({postFound});

    }


  //  res.send ("single post route..");
});


// fetch all posts
app.get('/post', function(req, res){
    res.json({
        message: "Posts fetched succesfully",
        postsData,
    }     
    );
});

//build a server

app.listen(8000, function(){
    console.log("server is up & running");
});
