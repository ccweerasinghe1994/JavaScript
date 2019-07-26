var mark_1 = parseInt(prompt("enter the first module mark"));
var mark_2 = parseInt(prompt("enter the second module mark"));
var mark_3 = parseInt(prompt("enter the third module mark"));
var mark_4 = parseInt(prompt("enter the fourth module mark"));
var mark_5 = parseInt(prompt("enter the fifth module mark"));

var pass_1 = mark_1 > 60 ? 1 : 0;
var pass_2 = mark_2 > 60 ? 1 : 0;
var pass_3 = mark_3 > 60 ? 1 : 0;
var pass_4 = mark_4 > 60 ? 1 : 0;
var pass_5 = mark_5 > 60 ? 1 : 0;

//var passed_modules = console.log(pass_1, pass_2, pass_3, pass_4, pass_5);
console.log(typeof pass_1);
var num_modules_passed =
  parseInt(pass_1) +
  parseInt(pass_2) +
  parseInt(pass_3) +
  parseInt(pass_4) +
  parseInt(pass_5);
console.log(num_modules_passed);
var average_mark = (mark_1 + mark_2 + mark_3 + mark_4 + mark_5) / 5;
average_mark = average_mark.toFixed(2);
console.log(average_mark);

var pass = (average_mark>=60)&& (num_modules_passed>=4)
