function StudentListView (parentElem, studentList) {
  var studentList = studentList,
      parentElem = parentElem;
  
  this.show = function () {
    var table = document.createElement('table'),
        tbody;
    
    table.innerHTML = studentListTemplate;
    tbody = table.querySelector('tbody');
    
    studentList.forEach(student => {
      var studentItemView = new StudentItemView(tbody, student);
      studentItemView.show();
    });
    
    table.classList.add('simple-little-table');
    return parentElem.appendChild(table);
  };
  
  return this;
}