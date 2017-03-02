function StudentItemView (parentElem, student) {
  var student = student,
      parentElem = parentElem,
      infoButton, editButton,
      viewElem = document.createElement('tr');
  
  this.show = function () {
    render();
    student.on('change', update);
    
    parentElem.appendChild(viewElem);
  };
  
  function update () {
    infoButton.removeEventListener('click', showInfo);
    editButton.removeEventListener('click', showEdit);
    
    render();
  }
  
  function render () {
    var studentInfo = student.getShortForm();
    viewElem.innerHTML = renderTemplate(studentItemTemplate, studentInfo);
    
    infoButton = viewElem.querySelector('.info-button');
    editButton = viewElem.querySelector('.edit-button');
    
    infoButton.addEventListener('click', showInfo, false);
    editButton.addEventListener('click', showEdit, false);
  }
  
  function showInfo () {
    mediator.pub('showInfo', student);
  }
  
  function showEdit () {
    mediator.pub('showEdit', student);
  }
  
  return this;
}