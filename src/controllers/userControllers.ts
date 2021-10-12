exports.getAllUsers = async (req, res, next) => {
  res.send('Get All Users Controller Fired');
};

exports.getUserById = async (req, res, next) => {
  res.send('Get User By Id Controller Fired');
};

exports.register = async (req, res, next) => {
  res.send('Register User Controller Fired');
};

exports.login = async (req, res, next) => {
  res.send('Login User Controller Fired');
};

exports.updateUserById = async (req, res, next) => {
  res.send('Update User By Id Controller Fired');
};

exports.deleteUserById = async (req, res, next) => {
  res.send('Delete User By Id Controller Fired');
};
