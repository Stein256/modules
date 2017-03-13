'use strict';

var Country = (function () {
  function Country (name, population, area, continent) {
    var values = {
        name: name,
        population: population,
        area: area,
        continent: continent,
        isLiked: false
      };
    
    this.toJSON = function () {
      var json = {};
      for(let key in values) {
        json[key] = values[key];
      }
      return json;
    }
    
    this.get = function (key) {
      return values[key];
    };
    
    this.set = function (properties) {
      for (let key in properties) {
        if(key in values) {
          values[key] = properties[key];
        }
      }
    };
  }
  
  function isOwnContinent (continent) {
    return this.get('continent') == continent;
  }
  
  function isLiked () {
    return this.get('isLiked');
  }
  
  function like () {
    var isLiked = this.get('isLiked');
    this.set({
      isLiked: !isLiked
    });
  }
  
  Country.prototype.isOwnContinent = isOwnContinent;
  Country.prototype.like = like;
  Country.prototype.isLiked = isLiked;
  
  return Country;
})();
