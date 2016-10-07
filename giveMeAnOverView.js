var _ = require('lodash');

var worker = function(orders) {
  _.reduce(orders, function(result, one){
    var key = one.article;
    // number of article
    console.log(key)
    console.log(result)
    if(result[key] === undefined ) {
      result[key] = 0;
    } else {
      result[key] += one.quantity;
    }

    return result;
    // return object
    console.log(result)

    console.log("------");
  }, []);
};

module.exports = worker;



// * Calculates the total number of orders for each article.
// * Sorts the resulting array so that the articles with the highest number of orders are on top
//
//   [ { article: 1, total_orders: 9 },
//     { article: 2, total_orders: 2 } ]


// _.reduce(
//       { 'a': 1, 'b': 2, 'c': 3 },
//       function(result, num, key) {
//           result[key] = num * 3;
//           return result;
//       },
//       {}
//   );
