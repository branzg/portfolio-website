// JavaScript source code
var postsDiv = document.getElementGById("posts");

var posts = ["Post 1", "Post 2", "Post 3"];

posts.forEach(function (post) {
    var postDiv = document.createElement("div");
    postDiv.innerHTML = "Post Content";
    postsDiv.appendChild(postDiv);
});