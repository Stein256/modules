'use strict';

function StudentsController () {
  var students = new StudentList([
    new Student('Alex', 'Hryhoriev', 'male', new Date(1996, 2, 14), 'izaya256'),
    new Student('Vladimir', 'Timofeev', 'male', new Date(1988, 5, 6), 'vovanium'),
    new Student('Ira', 'Ruban', 'female', new Date(1995, 1, 4), 'princess_rina88'),
    new Student('Svetlana', 'Ovcharenko', 'female', new Date(1996, 0, 1), 'ami-caty'),
    new Student('Lena', 'Ryndina', 'female', new Date(1987, 5, 17), 'dn100980rev'),
    new Student('Polina', 'Zhilyaeva', 'female', new Date(1987, 8, 10), 'polina_volna')
  ]),
    $parrentElem = $('#students'),
    $listDiv = $('<div>'),
    $infoDiv = $('<div>'),
    
    studentListView = new StudentListView($listDiv, students),
    studentInfoView = new StudentInfoView($infoDiv),
    studentEditView = new StudentEditView($infoDiv);
    
  mediator.sub('showEdit', showEdit);
  mediator.sub('showInfo', showInfo);
  
  studentListView.show();
  
  $parrentElem.append($listDiv, $infoDiv);
  
  function showEdit (student) {
    studentInfoView.remove();
    studentEditView.show(student);
  }
  
  function showInfo (student) {
    studentEditView.remove();
    studentInfoView.show(student);
  }
  
  return this;
}
