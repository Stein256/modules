'use strict';

function CountriesController () {
  var $parrentElem = $('#countries'),
      countryList = new CountryList(),
      countryListView = new CountryListView({collection: countryList});

  countryList.fetch();
  countryList.once('sync', function () {
    $parrentElem.append(countryListView.render().$el);
  });
  
  return this;
}
