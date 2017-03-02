function ColorCountersView (colorCounterList, parentElem) {
	this.show = function () {
    var container = document.createDocumentFragment();
    
    colorCounterList.forEach(counter => {
      var counterElem = document.createElement('div');
      counterElem.innerHTML = counter.get('colorName') + ': ' + counter.get('count');
      
      counter.on('update', () => {
        counterElem.innerHTML = counter.get('colorName') + ': ' + counter.get('count');
      });
      
      counterElem.classList.add('list');
      container.appendChild(counterElem);
    });
    
    parentElem.appendChild(container);
  };
}