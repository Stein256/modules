function Student (name, surname, gender, birthday, skype) {
  var values = {
    name: name,
    surname: surname,
    gender: gender,
    birthday: birthday,
    skype: skype
  };
      
  this.getShortForm = function () {
    return {
      fullName: values.name + ' ' + values.surname,
      age: getAge(),
      gender: values.gender
    };
  };
  
  this.getFullForm = function () {
    return {
      name: values.name,
      surname: values.surname,
      age: getAge(),
      birthday: values.birthday.toDateString(),
      gender: values.gender,
      skype: values.skype
    };
  };
  
  this.set = function (properties) {
    for (key in properties) {
      values[key] = properties[key];
    }
    
    this.trigger('change');
  };
  
  function getAge () {
    return new Date(Date.now() - values.birthday).getUTCFullYear() - 1970;
  }
  
  return this;
}

Student.prototype = new Observer();