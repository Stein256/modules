'use strict';

function CountriesController () {
  var parrentElem = document.querySelector('#countries'),
      countryList = new CountryList(),
      countryListView = new CountryListView(countryList);

  parrentElem.appendChild(countryListView.getViewElem());
  
  mediator.sub('countryDelete', country => {
    countryList.removeCountry(country);
  });
  
  return this;
}
