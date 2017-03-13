'use strict';

var CountryListView = (function () {
  function CountryListView (countryList) {
    var table = document.createElement('table'),
        tbody, buttons;
    
    this.getViewElem = function () {
      table.innerHTML = countryListTemplate;
      table.classList.add('simple-little-table');
      
      tbody = table.querySelector('tbody');
      buttons = table.querySelector('form');
      
      Array.prototype.forEach.call(buttons.elements, button => {
        button.addEventListener('click', renderList.bind(null, button.name), false);
      });
      
      renderList('All');
      
      return table;
    };
    
    function renderList (continent) {
      var countries = countryList.getCountriesOfContinent(continent);
      
      mediator.pub('coyntryListRendered');
      
      countries.forEach(country => {
        var countryView = new CountryView(country),
            countryElem = countryView.getViewElem();
            
        tbody.appendChild(countryElem);
      });
    }
    
    return this;
  }
  
  return CountryListView;
})();