function ColorCounter (colorName, color, count) {
	var values = {
    colorName: colorName,
    color: color,
    count: count || 0
  }, events = {};
	
	this.countIncrement = function () {
    values.count++;
    this.trigger('update');
	};
	
	this.toJSON = function () {
    var json = {};
    for (let key in values) {
      json[key] = values[key];
    }
    return json;
	};
  
  this.get = function (prop) {
    return values[prop];
  };
  
  this.on = function (eventType, func) {
    var handlers = events[eventType];
    if (!handlers) {
      handlers = events[eventType] = [];
    }
    handlers.push(func);
  };
  
  this.trigger = function (eventType) {
    var handlers = events[eventType];
    if (handlers) {
      handlers.forEach(func => func.call(this));
    }
  };
  
	return this;
}