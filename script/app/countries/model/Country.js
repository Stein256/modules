'use strict';

var Country = Backbone.Model.extend ({
  defaults: {
    name: '',
    population: 0,
    area: 0,
    continent: '',
    isLiked: false
  },
  
  isOwnContinent: function (continent) {
    return this.get('continent') == continent;
  },
  
  isLiked: function () {
    return this.get('isLiked');
  },
  
  like: function () {
    var isLiked = this.get('isLiked');
    this.set('isLiked', !isLiked);
  }
});
