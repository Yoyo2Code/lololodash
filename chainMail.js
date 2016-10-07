var _ = require('lodash');

var worker = function(words){
  var answer = _.chain(words)
                .sortBy(words, function(word){ return word })
                .map(function(word) {
                  var newWord = word.toUpperCase();
                  return newWord + "CHAINED";
                });
    return answer;
};

module.exports = worker;
