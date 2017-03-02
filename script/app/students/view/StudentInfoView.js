function StudentInfoView (parentElem) {
  var parentElem = parentElem,
      closeButton, editButton,
      viewElem, student;
      
  mediator.sub('showInfo', show);
  mediator.sub('showEdit', remove);
  
  function show (_student) {
    student = _student;
    if (viewElem) {
      update();
    } else {
      create();
      parentElem.appendChild(viewElem);
    }
  }
  
  function create () {
    viewElem = document.createElement('table');
    viewElem.classList.add('simple-little-table');
    
    render();
  }
  
  function update () {
    closeButton.removeEventListener('click', remove);
    editButton.removeEventListener('click', showEdit);
    
    render();
  }
  
  function render () {
    var studentInfo = student.getFullForm();
    viewElem.innerHTML = renderTemplate(studentInfoTemplate, studentInfo);
    
    closeButton = viewElem.querySelector('.close-button');
    editButton = viewElem.querySelector('.edit-button');
    
    closeButton.addEventListener('click', remove, false);
    editButton.addEventListener('click', showEdit, false);
  }
  
  function remove () {
    if (viewElem) {
      closeButton.removeEventListener('click', remove);
      editButton.removeEventListener('click', showEdit);
      
      parentElem.removeChild(viewElem);
      viewElem = null;
    }
  }
  
  function showEdit () {
    mediator.pub('showEdit', student);
  }
  
  return this;
}