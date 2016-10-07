var _ = require('lodash');

var worker = function(comments) {
  var sortedUsers = _.groupBy(comments, 'username');
  var userStats   = _.forEach(sortedUsers, function(comments, userUsername) {
    var commentCount = _.size(comments);

    var userData = {
      this.username: userUsername,
      this.comment_count: commentCount
    };

    return userData;
  });
  
  return userStats;
};

module.exports = worker;
