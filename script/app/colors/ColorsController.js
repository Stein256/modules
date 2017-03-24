'use strict';

function ColorsController () {
  var colorCounterList = new ColorCounterList([
    new ColorCounter('Red', '#FF0000'),
    new ColorCounter('Green', '#00FF00'),
    new ColorCounter('Blue', '#0000FF')
  ]), 
    blocks = document.getElementById('color-blocks'),
    buttonsBlock = blocks.children[0],
    colorBlock = blocks.children[1],
    countersBlock = blocks.children[2],
  
    colorButtonsView = new ColorButtonsView(colorCounterList, buttonsBlock),
    colorBoxView = new ColorBoxView(colorCounterList, colorBlock),
    colorCountersView = new ColorCountersView(colorCounterList, countersBlock);
    
  colorButtonsView.show();
  colorBoxView.show();
  colorCountersView.show();
  
  return this;
}
