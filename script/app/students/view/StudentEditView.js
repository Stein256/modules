function StudentEditView (parentElem) {
  var parentElem = parentElem,
      closeButton, saveButton,
      viewElem, student;
      
  mediator.sub('showEdit', show);
  mediator.sub('showInfo', remove);
  
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
    viewElem = document.createElement('form');
    //viewElem.addEventListener('submit', dontSendForm, false);
    
    render();
  }
  
  function update () {
    closeButton.removeEventListener('click', remove);
    saveButton.removeEventListener('click', saveChanges);
    
    render();
  }
  
  function render () {
    var studentInfo = student.getFullForm();
    viewElem.innerHTML = renderTemplate(studentEditTemplate, studentInfo);
    
    closeButton = viewElem.querySelector('.close-button');
    saveButton = viewElem.querySelector('.save-button');
    
    closeButton.addEventListener('click', remove, false);
    saveButton.addEventListener('click', saveChanges, false);
  }
  
  function remove () {
    if (viewElem) {
      closeButton.removeEventListener('click', remove);
      saveButton.removeEventListener('click', saveChanges);
      //viewElem.removeEventListener('submit', dontSendForm);
      
      parentElem.removeChild(viewElem);
      viewElem = null;
    }
  }
  
  /*function dontSendForm (event) {
    event.preventDefault();
  }*/
  
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