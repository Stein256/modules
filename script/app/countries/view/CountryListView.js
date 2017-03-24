'use strict';

var CountryListView = function () {
  var countryViews = [], tbody;
  
  return Backbone.View.extend({
    tagName: 'table',
    className: 'simple-little-table',
    
    events: {
      'click form': 'chooseContinent'
    },
    
    render: function () {
      this.$el.html(countryListTemplate);
      tbody = this.$('tbody');
      this.renderList('All');
      return this;
    },
    
    renderList: function (continent) {
      var countries = this.collection.getCountriesOfContinent(continent);
      
      countryViews.forEach(countryView => countryView.remove());
      countryViews = [];
      
      countries.forEach(country => {
        var countryView = new CountryView({model: country});
            
        countryViews.push(countryView);
        tbody.append(countryView.render().$el);
      });
    },
    
    chooseContinent: function (event) {
      this.renderList(event.target.name);
    }
  });
}();