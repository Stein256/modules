function StudentList (students) {
  var students = students;
  
  this.forEach = Array.prototype.forEach.bind(students);
  
  return this;
}