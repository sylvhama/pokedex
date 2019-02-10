const jwt = require('jsonwebtoken')

function getUserIdOrThrowErrorIfNotAuthenticated(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new Error('You must be authenticated to do that');
}

module.exports = {
  getUserIdOrThrowErrorIfNotAuthenticated,
}