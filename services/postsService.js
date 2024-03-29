var fs = require('fs');

var getPosts = function() {
  posts = fs.readFileSync('db/posts.json', 'utf8');
  console.log(posts);
  posts = JSON.parse(posts);
  return posts;
}

var fs = require('fs');

var postsFilePath = 'db/posts.json';

var loadFilePosts = function() {
  var fileData = fs.readFileSync(postsFilePath, 'utf8');
  var posts = JSON.parse(fileData);

  return posts;
}

var getPosts2 = function() {
  var posts = loadFilePosts();
  return posts;
}

var saveFilePosts = function(posts) {
  var data = JSON.stringify(posts);
  fs.writeFileSync(postsFilePath, data, 'utf8');
}

var savePost = function(newPost) {
  var posts = loadFilePosts();
  posts.push(newPost);
  saveFilePosts(posts);
}

module.exports = {
  getPosts: getPosts,
  getPosts2: getPosts2,
  savePost: savePost
}
