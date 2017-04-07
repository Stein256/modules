'use strict';

var StudentItemView = Backbone.View.extend({
  tagName: 'tr',
  
  template: _.template(studentItemTemplate, {variable: 'data'}),
  
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },
  
  events: {
    'click .info-button': 'showInfo',
    'click .edit-button': 'showEdit',
    'click .delete-button': 'deleteModel'
  },
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  
  showInfo: function () {
    mediator.pub('showInfo', this.model);
  },
  
  showEdit: function () {
    mediator.pub('showEdit', this.model);
  },
  
  deleteModel: function () {
    this.model.destroy();
    this.remove();
  }
});