var balance = 1000;
var price = 50;

if(price<balance){
    console.log('payment is successfull');
    balance-=price;

}else{
    console.log('you don\'t have emough funds');
}

var speed = 30;

if(speed>70){
    console.log('your going too fast');
}
else if(speed<40){
    console.log('your going too slow');

}
else{
    console.log('your speed is fine')
}