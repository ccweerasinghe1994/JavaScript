var amount_due = prompt("Total amount customer due");
var amount_paid_by_customer = prompt("Total amount customer paid");

var change = amount_paid_by_customer - amount_due;
var change = change > 0 ? change : "need more money";
console.log(change);

var notes_1 = 5000;
var notes_2 = 1000;
var notes_3 = 100;
var notes_4 = 10;
var notes_5 = 20;
var notes_6 = 50;
var conis_7 = 1;
var conis_8 = 2;
var conis_9 = 5;
var conis_10 = 10;

var no_of_note_1 =
  parseInt(change / notes_1) > 0 ? parseInt(change / notes_1) : 0;
change = change - notes_1 * no_of_note_1;

var no_of_note_2 =
  parseInt(change / notes_2) > 0 ? parseInt(change / notes_2) : 0;
change = change - notes_2 * no_of_note_2;

var no_of_note_3 =
  parseInt(change / notes_3) > 0 ? parseInt(change / notes_3) : 0;
change = change - notes_3 * no_of_note_3;

var no_of_note_4 =
  parseInt(change / notes_4) > 0 ? parseInt(change / notes_4) : 0;
change = change - notes_4 * no_of_note_4;

var no_of_note_5 =
  parseInt(change / notes_5) > 0 ? parseInt(change / notes_5) : 0;
change = change - notes_5 * no_of_note_5;

var no_of_note_6 =
  parseInt(change / notes_6) > 0 ? parseInt(change / notes_6) : 0;
change = change - notes_6 * no_of_note_6;

var no_of_conis_7 =
  parseInt(change / conis_7) > 0 ? parseInt(change / conis_7) : 0;
change = change - conis_7 * no_of_conis_7;
var no_of_conis_8 =
  parseInt(change / conis_8) > 0 ? parseInt(change / conis_8):0;
change = change - conis_8 * no_of_conis_8;

var no_of_conis_9 =
  parseInt(change / conis_9) > 0 ? parseInt(change / conis_9) : 0;
change = change - conis_9 * no_of_conis_9;
var no_of_conis_10 =
  parseInt(change / conis_10) > 0 ? parseInt(change / conis_10) : 0;
change = change - conis_10 * no_of_conis_10;

// var no_of_note_8 =
//   parseInt(change / notes_8) > 0 ? parseInt(change / notes_8) : 0;
// change = change - notes_8 * no_of_note_8;

// var no_of_note_9 =
//   parseInt(change / notes_9) > 0 ? parseInt(change / notes_9) : 0;
// change = change - notes_9 * no_of_note_9;

// var no_of_note_10 =
//   parseInt(change / notes_10) > 0 ? parseInt(change / notes_10) : 0;
// change = change - notes_10 * no_of_note_10;

console.log("no of note 5000 " + no_of_note_1);
console.log("no of note 1000" + no_of_note_2);
console.log("no of note 100" + no_of_note_3);
console.log("no of note 10" + no_of_note_4);
console.log("no of note five" + no_of_note_5);
console.log(no_of_conis_7);
console.log(no_of_conis_8);
console.log(no_of_conis_9);
console.log(no_of_conis_10);
