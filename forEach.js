var _ = require ("lodash");

var worker = function(cities) {
  var labeledCities = _.forEach(cities, function(city){
    var population = city.population;

    if(population > 1) {
      city.size = 'big';
    } else if(population < 1 && population > 0.5) {
      city.size = 'med';
    } else {
      city.size = 'small';
    };
  });
  return labeledCities;
}

module.exports = worker;
