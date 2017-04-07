'use strict';

var StudentInfoView = Backbone.View.extend({
  tagName: 'table',
  className: 'simple-little-table',
  
  template: _.template(studentInfoTemplate, {variable: 'data'}),
  
  events: {
    'click .close-button': 'closeInfo',
    'click .edit-button': 'showEdit',
  },
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  
  closeInfo: function () {
    this.remove();
  },
  
  showEdit: function () {
    mediator.pub('showEdit', this.model);
  }
});