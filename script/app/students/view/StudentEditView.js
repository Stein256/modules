function StudentEditView ($parentElem) {
  var closeButton, saveButton,
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
      saveButton.removeEventListener('click', saveChanges);
      
      $parentElem[0].removeChild(viewElem);
      viewElem = null;
    }
  };
  
  function create () {
    viewElem = document.createElement('form');
    render();
  }
  
  function update () {
    closeButton.removeEventListener('click', this.remove);
    saveButton.removeEventListener('click', saveChanges);
    
    render();
  }
  
  function render () {
    var studentInfo = student.getFullForm();
    viewElem.innerHTML = renderTemplate(studentEditTemplate, studentInfo);
    
    closeButton = viewElem.querySelector('.close-button');
    saveButton = viewElem.querySelector('.save-button');
    
    closeButton.addEventListener('click', this.remove, false);
    saveButton.addEventListener('click', saveChanges, false);
  }
  
  function saveChanges () {
    var changes = {};
    Array.prototype.forEach.call(viewElem.elements, field => {
      if (field.value) {
        changes[field.name] = field.value;
      }
    });
    
    student.set(changes);
    mediator.pub('showInfo', student);
  }
  
  return this;
}