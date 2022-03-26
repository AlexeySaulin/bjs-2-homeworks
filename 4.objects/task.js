function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}
Student.prototype.addMarks = function (...mark) {
  this.marks.push(...mark);
}
Student.prototype.getAverage = function (marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return (sum / marks.length);
  }
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}