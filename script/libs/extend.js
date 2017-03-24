'use strict';

function extend (Child, Parrent) {
  function Surrogate () {
    this.constructor = Child;
  }
  Surrogate.prototype = Parent.prototype;
  Child.prototype = new Surrogate();
}