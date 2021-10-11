const Parse = require('parse/node');

exports.getAllPosts = async (req, res, next) => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  const allPostsList = await query.findAll();

  res.json({ allPostsList });
};

exports.getPostById = async (req, res, next) => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  query.equalTo('objectId', 'XI2ZP6pQPc');

  const post = await query.find();

  res.json({ post });
};

exports.createNewPost = async (req, res, next) => {
  const Post = Parse.Object.extend('Post');
  const post = new Post();
  post.set('title', 'This is post three');
  post.set(
    'content',
    'This is the post  content and should contain something about the post that nobody knows'
  );

  const savedPost = await post.save();
  console.log(savedPost);

  console.log(savedPost.get('content'));

  res.send({ savedPost });
};

exports.updatePostById = (req, res, next) => {
  res.send('Update Post By Id Controller Fired');
};

exports.deletePostById = (req, res, next) => {
  res.send('Delete Post By Id Controller Fired');
};
