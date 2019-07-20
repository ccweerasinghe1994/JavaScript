var x = 1;
console.log(typeof x);

var y = 2.4;
var z = 5.3e8;
console.log(z);

var max = Number.MAX_VALUE;
console.log(max);
var min = Number.MIN_VALUE;
console.log(min);

//arith matic operations

var a = 4 + 5;
console.log(a);

a = 3 * 4;
console.log(a);

a = y - x;
console.log(a);

var b = 3;
//b= b+3;
b += 3;
console.log(b);

//operator presedence

var c = 4*(5 +3);
console.log(c);

var d = ++c;
console.log(c);
console.log(d);
  
var e = c++;
console.log(c);
console.log(e);

var f = 17%3;
console.log(f);

var g=3 ** 3;
console.log(g);

var h = Infinity;
console.log(h);

//not a number

var i = 0/0; // not meaning full
console.log(i);

//power methord
var j = Math.pow(2,53);
console.log(j);

//big number
var l = Math.pow(2,20000);
console.log(l);

var number = '3';
console.log(typeof parseInt(number));

console.log(parseInt('not a number'));







