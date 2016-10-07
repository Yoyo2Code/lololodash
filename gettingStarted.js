var _ = require("lodash");

var worker = function(users) {
  var activeUsers = _.filter(users, ["active", true]);
  return activeUsers;
};

module.exports = worker;
