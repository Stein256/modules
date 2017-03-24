function StudentInfoView ($parentElem) {
  var closeButton, editButton,
      viewElem, student;
      
  this.show = function (_student) {
    student = _student;
    if (viewElem) {
      update();
    } else {
      create();
      $parentElem.append(viewElem);
    }
  };
  
  this.remove = function () {
    if (viewElem) {
      closeButton.removeEventListener('click', this.remove);
      editButton.removeEventListener('click', showEdit);
      
      $parentElem[0].removeChild(viewElem);
      viewElem = null;
    }
  };
  
  function create () {
    viewElem = document.createElement('table');
    viewElem.classList.add('simple-little-table');
    
    render();
  }
  
  function update () {
    closeButton.removeEventListener('click', this.remove);
    editButton.removeEventListener('click', showEdit);
    
    render();
  }
  
  function render () {
    var studentInfo = student.getFullForm();
    viewElem.innerHTML = renderTemplate(studentInfoTemplate, studentInfo);
    
    closeButton = viewElem.querySelector('.close-button');
    editButton = viewElem.querySelector('.edit-button');
    
    closeButton.addEventListener('click', this.remove, false);
    editButton.addEventListener('click', showEdit, false);
  }
  
  function showEdit () {
    mediator.pub('showEdit', student);
  }
  
  return this;
}