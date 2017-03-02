function ColorButtonsView (colorCounterList, parentElem) {
	this.show = function () {
    var container = document.createDocumentFragment();
    
    colorCounterList.forEach(counter => {
      var button = document.createElement('button');
      button.innerHTML = counter.get('colorName');
      
      button.addEventListener('click', counter.countIncrement.bind(counter), false);
      
      button.classList.add('list');
      container.appendChild(button);
    });
    
    parentElem.appendChild(container);
	};
}