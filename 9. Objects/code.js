var myphone = {
  make: "apple",
  model: "iphone 7",
  warrenty: 12,
  color: "gold"
};

console.log(myphone);
console.log(myphone.model);
myphone.model = "iphone 6";
console.log(myphone.model);
console.log(myphone);

myphone.storage = '64 Gb';
console.log(myphone);

delete myphone.storage ;
console.log(myphone);

