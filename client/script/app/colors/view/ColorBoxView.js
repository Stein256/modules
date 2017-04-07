function ColorBoxView (colorCounterList, parentElem) {
  this.show = function () {
    var box = document.createElement('div');
    
    colorCounterList.forEach(counter => {
      counter.on('update', () => {
        box.style.backgroundColor = counter.get('color');
      });
    });
    
    box.classList.add('box');
    parentElem.appendChild(box);
  };
}