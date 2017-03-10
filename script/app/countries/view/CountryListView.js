'use strict';

var CountryListView = (function () {
  function CountryListView (countryList) {
    var table = document.createElement('table'),
        tbody, buttons, countryViews = [];
    
    table.innerHTML = countryListTemplate;
    table.classList.add('simple-little-table');
    
    tbody = table.querySelector('tbody');
    buttons = table.querySelector('form');
    
    renderList('All');
    
    Array.prototype.forEach.call(buttons.elements, button => {
      button.addEventListener('click', renderList.bind(null, button.name), false);
    });
    
    function renderList (continent) {
      var countries;
      countryViews.forEach(countryView => countryView.remove());
      countryViews = [];
      
      if (continent == 'All') {
        countries = countryList.getCountries();
      } else {
        countries = countryList.filter(country => country.get('continent') == continent);
      }
      
      countries.forEach(country => {
        var countryView = new CountryView(country),
            countryElem = countryView.getViewElem();
            
        countryViews.push(countryView);
        tbody.appendChild(countryElem);
      });
    }
    
    this.getViewElem = function () {
      return table;
    };
    
    return this;
  }
  
  return CountryListView;
})();