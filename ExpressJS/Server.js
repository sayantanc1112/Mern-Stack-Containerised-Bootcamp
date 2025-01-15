const express = require("express");
const fs = require("fs");
const { createFile, createFolder } = require("./utils");
const postsData = require("./data/posts.json");
const app = express();

//pass incoming data
app.use(express.json());

//create folder
//createFolder("data");
//create file
createFile("data/posts.json", "content here");
//routing
//home route
app.get("/", function (req, res) {
  res.send("Home Route");
});

//fetch all posts
app.get("/posts", function (req, res) {
  res.json({
    message: "Posts fetched Successfully",
    postsData,
  });
});

//Create post
app.post("/posts", function (req, res) {
  //get the post from user
  const newPost = req.body;
  //push the new post into existing post
  postsData.unshift({
    ...newPost,
    id: postsData.length.toString(),
  });
  console.log(postsData);
  //write to the file
  fs.writeFile("data/posts.json", JSON.stringify(postsData), function (err) {
    if (err) {
      console.log(errr);
    }
    //send message to the user
    res.json({
      message: " Post Created Successfully",
    });
  });
});

//update post
app.put("/posts/:id", function (req, res) {
  //get the dynamic id === params
  const id = req.params.id;
  const { url, title, description } = req.body;

  //find the post to update
  const foundPost = postsData.find(function (post) {
    return post.id === id;
  });
  if (!foundPost) return res.json({ msg: "Post not Found" });

  //filter out all post with the post found
  const filteredPosts = postsData.filter(post => post.id !== id);

  //update the found post
  foundPost.title = title;
  foundPost.description = description;
  foundPost.url = url;

  //pusth the updated post in to filtered posts array
  filteredPosts.unshift(foundPost);

  fs.writeFile(
    "data/posts.json",
    JSON.stringify(filteredPosts),
    function (err) {
      if (err) {
        console.log(err);
      }
      //send message to the user
      res.json({
        message: " Post Updated Successfully",
      });
    }
  );
});

//delete post
app.delete("/posts/:id", function (req, res) {
  //get the id
  const id = req.params.id;
  const filteredPosts = postsData.filter(function (post) {
    return post.id !== id;
  });
  //write to the file
  fs.writeFile(
    "data/posts.json",
    JSON.stringify(filteredPosts),
    function (err) {
      if (err) {
        console.log(err);
      }
      //send message to the user
      res.json({
        message: " Post Deleted Successfully",
      });
    }
  );
});

//single post
app.get("/posts/:id", function (req, res) {
  //get the id of the post
  const id = req.params.id;
  //find post by id
  const postFound = postsData.find(post => {
    return post.id === id;
  });

  if (!postFound) {
    res.json({ message: "Post not Found" });
  } else {
    //send the post to the user
    res.json({ postFound });
  }
});

//create a server
app.listen(9000, function () {
  console.log("Server is up and running");
});
