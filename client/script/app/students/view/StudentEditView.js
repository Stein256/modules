'use strict';

var StudentEditView = (function () {
  var $inputs;
  
  return Backbone.View.extend({
    tagName: 'table',
    className: 'simple-little-table',
    
    template: _.template(studentEditTemplate, {variable: 'data'}),
    
    events: {
      'click .close-button': 'closeEdit',
      'click .save-button': 'saveModel',
    },
    
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      $inputs = this.$('input');
      return this;
    },
    
    closeEdit: function () {
      this.remove();
    },
    
    saveModel: function () {
      var changes = {};
      $inputs.each((index, input) => {
        if(input.value) {
          changes[input.name] = input.value;
        }
      });
      
      this.model.save(changes);
      
      if(this.model.isNew()) {
        mediator.pub('studentAdded', this.model);
      }
      
      mediator.pub('showInfo', this.model);
    }
  });
})();