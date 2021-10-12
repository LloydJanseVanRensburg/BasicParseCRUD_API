import Parse from 'parse/node';
import restify from 'restify';

exports.getAllUsers = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Get All Users Controller Fired');
  next();
};

exports.getUserById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Get User By Id Controller Fired');
  next();
};

exports.register = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Register User Controller Fired');
  next();
};

exports.login = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Login User Controller Fired');
  next();
};

exports.updateUserById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Update User By Id Controller Fired');
  next();
};

exports.deleteUserById = async (
  req: restify.Request,
  res: restify.Response,
  next: restify.Next
) => {
  res.send('Delete User By Id Controller Fired');
  next();
};
