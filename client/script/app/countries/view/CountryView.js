'use strict';

var CountryView = Backbone.View.extend({
  tagName: 'tr',
  
  template: _.template(countryTemplate, {variable: 'data'}),
  
  events: {
    'click .like-button': 'countryLike',
    'click .dislike-button': 'countryDislike',
    'click .delete-button': 'countryDelete'
  },
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.isLiked()) {
      this.$el.addClass('liked');
    }
    return this;
  },
  
  countryLike: function () {
    this.model.like();
    this.$el.toggleClass('liked');
  },
  
  countryDislike: function () {
    this.remove();
  },
  
  countryDelete: function () {
    this.model.destroy();
    this.remove();
  }
});