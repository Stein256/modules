'use strict';

var Student = Backbone.Model.extend({
  urlRoot: '/getStudentList',
  
  defaults: {
    name: 'name',
    surname: 'surname',
    gender: 'male',
    birthday: new Date(1990, 0, 1),
    skype: 'skype'
  },
  
  initialize: function () {
    this.setAge();
    this.setFullName();
    this.on('change:birthday', this.setAge);
    this.on('change:name change:surname', this.setFullName);
  },
  
  setAge: function () {
    var age;
    this.set('birthday', new Date(this.get('birthday')));
    age = new Date(Date.now() - this.get('birthday')).getUTCFullYear() - 1970;
    this.set('age', age);
  },
  
  setFullName: function () {
    var fullName = `${this.get('name')} ${this.get('surname')}`;
    this.set('fullName', fullName);
  }
});