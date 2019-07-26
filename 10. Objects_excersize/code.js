var student_1 = {
  name: "mark",
  marks: 70
};

var student_2 = {
  name: "jhon",
  marks: 75
};

var student_3 = {
  name: "Sara",
  marks: 90
};

var average = (student_1.marks +student_2.marks+student_3.marks)/3;
average = average.toFixed(2);
console.log(average);

var extra  = 15;
student_1.marks +=extra;
console.log(student_1.marks)  