'use strict';

function Mediator () {
  var channels = {};
  
  this.sub = function (channel, func) {
    if(!channels[channel]) {
      channels[channel] = [];
    }
    channels[channel].push(func);
  };
  
  this.pub = function (channel, ...args) {
    if(channels[channel]) {
      channels[channel].forEach(func => func(...args));
    }
  };
  
  this.remove = function (channel, func) {
    var i = channels[channel].indexOf(func);
    if(i != -1) {
      channels[channel].splice(i, 1);
    }
  };
}