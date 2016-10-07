var _ = require("lodash");

var worker = function(articles) {
  var answer = _.sortBy(articles, 'quantity');
  return _.reverse(answer);
};

module.exports = worker;
