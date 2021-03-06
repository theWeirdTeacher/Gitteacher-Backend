const jwt = require("express-jwt");
const secret = require("../config").secret;

const getTokenFromHeader = req => {
  let splitAuth = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : null;
  if (splitAuth && splitAuth[0] === "Token") {
    return splitAuth[1];
  }

  return null;
};

const auth = {
  required: jwt({
    secret: secret,
    userProperty: "auth",
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: "auth",
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;
