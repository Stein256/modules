'use strict';

function StudentsController () {
  var parrentElem = document.querySelector('#countries'),
      countryList = new countryList();
      
      ss
  var countryListView = new CountryListView(countryList);

  parrentElem.apprendChild(countryListView.getViewElem());
  
  mediator.sub('countryDelete', country => {
    countryList.removeCountry(country);
  });
  
  return this;
}
