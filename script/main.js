var students = new StudentList([
  new Student('Alex', 'Hryhoriev', 'male', new Date(1996, 2, 14), 'izaya256'),
  new Student('Vladimir', 'Timofeev', 'male', new Date(1988, 5, 6), 'vovanium'),
  new Student('Ira', 'Ruban', 'female', new Date(1995, 1, 4), 'princess_rina88'),
  new Student('Svetlana', 'Ovcharenko', 'female', new Date(1996, 0, 1), 'ami-caty'),
  new Student('Lena', 'Ryndina', 'female', new Date(1987, 5, 17), 'dn100980rev'),
  new Student('Polina', 'Zhilyaeva', 'female', new Date(1987, 8, 10), 'polina_volna')
]), 
  colorCounterList = new ColorCounterList([
  new ColorCounter('Red', '#FF0000'),
  new ColorCounter('Green', '#00FF00'),
  new ColorCounter('Blue', '#0000FF')
]), 
  mediator = new Mediator();

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('students'),
      listDiv = container.children[0],
      infoDiv = container.children[1],
      
      studentListView = new StudentListView(listDiv, students),
      studentInfoView = new StudentInfoView(infoDiv),
      studentEditView = new StudentEditView(infoDiv),
      
      blocks = document.getElementById('color-blocks'),
      buttonsBlock = blocks.children[0],
      colorBlock = blocks.children[1],
      countersBlock = blocks.children[2],
      
      colorButtonsView = new ColorButtonsView(colorCounterList, buttonsBlock),
      colorBoxView = new ColorBoxView(colorCounterList, colorBlock),
      colorCountersView = new ColorCountersView(colorCounterList, countersBlock),
      
      countriesController = new CountriesController();
      
  studentListView.show();
  
  colorButtonsView.show();
  colorBoxView.show();
  colorCountersView.show();
}, false);