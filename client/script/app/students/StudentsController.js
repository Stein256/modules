'use strict';

function StudentsController () {
  var $parrentElem = $('#students'),
    $listDiv = $('<div>'),
    $infoDiv = $('<div>'),
    
    studentList = new StudentList(),
    studentListView = new StudentListView({collection: studentList}),
    studentInfoView, studentEditView;
    
  mediator.sub('showInfo', showInfo);
  mediator.sub('showEdit', showEdit);
  mediator.sub('addStudent', addStudent);
  mediator.sub('studentAdded', studentAdded);
  
  $listDiv.append(studentListView.render().$el);
  studentList.fetch();
  
  $parrentElem.append($listDiv, $infoDiv);
  
  function showInfo (student) {
    studentInfoView && studentInfoView.remove();
    studentEditView && studentEditView.remove();
    
    studentInfoView = new StudentInfoView({model: student});
    $infoDiv.append(studentInfoView.render().$el);
  }
  
  function showEdit (student) {
    studentInfoView && studentInfoView.remove();
    studentEditView && studentEditView.remove();
    
    studentEditView = new StudentEditView({model: student});
    $infoDiv.append(studentEditView.render().$el);
  }
  
  function addStudent () {
    var student = new Student();
    
    studentInfoView && studentInfoView.remove();
    studentEditView && studentEditView.remove();
    
    studentEditView = new StudentEditView({model: student});
    $infoDiv.append(studentEditView.render().$el);
  }
  
  function studentAdded (student) {
    studentList.add(student);
  }
  
  return this;
}