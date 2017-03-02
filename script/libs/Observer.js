function Observer () {
  var events = {};
  
  this.on = function (event, func) {
    if(!events[event]) {
      events[event] = [];
    }
    events[event].push(func);
  };
  
  this.trigger = function (event, ...args) {
    if(events[event]) {
      events[event].forEach(func => func(...args));
    }
  };
  
  this.off = function (event, func) {
    var i = events[event].indexOf(func);
    if(i != -1) {
      events[event].splice(i, 1);
    }
  };
}