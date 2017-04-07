'use strict';

var CountryList = Backbone.Collection.extend({
  model: Country,
  url: '/getCountryList',
  
  getCountriesOfContinent: function (continent) {
    var countries = this.models;
    if (continent != 'All') {
      countries = countries.filter(country => country.isOwnContinent(continent));
    }
    return countries;
  }
});