'use strict';

var StudentListView = (function () {
  var $tbody;
  
  return Backbone.View.extend({
    tagName: 'table',
    className: 'simple-little-table',
    
    events: {
      'click .add-button': 'addStudent'
    },
    
    initialize: function () {
      this.listenTo(this.collection, 'add', this.renderOne);
    },
    
    render: function () {
      this.$el.html(studentListTemplate);
      $tbody = this.$('tbody');
      return this;
    },
    
    renderOne: function (student) {
      var studentItemView = new StudentItemView({model: student});
      $tbody.append(studentItemView.render().$el);
    },
    
    addStudent: function () {
      mediator.pub('addStudent');
    }
  });
})();