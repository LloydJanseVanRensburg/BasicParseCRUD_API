import Parse from 'parse/node';
import restify from 'restify';

exports.getAllPosts = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  const allPostsList = await query.findAll();

  res.json({ allPostsList });

  next();
};

exports.getPostById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  query.equalTo('objectId', 'XI2ZP6pQPc');

  const post = await query.find();

  res.json({ post });

  next();
};

exports.createNewPost = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
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

  next();
};

exports.updatePostById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  let objectId = req.params.id;

  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  query.equalTo('objectId', objectId);
  const currentPost = await query.first();

  if (!currentPost) {
    return;
  }

  let { title, content } = req.body;

  if (title) currentPost.set('title', title);
  if (content) currentPost.set('content', content);

  const updatedPost = await currentPost.save();

  res.json({ updatedPost });

  next();
};

exports.deletePostById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  let objectId = req.params.id;

  const Post = Parse.Object.extend('Post');
  const query = new Parse.Query(Post);

  query.equalTo('objectId', objectId);
  const currentPost = await query.first();

  if (!currentPost) {
    return;
  }

  await currentPost.destroy();

  res.status(200);
  res.json({ message: 'Delete Successful' });
  next();
};
