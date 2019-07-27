var day = prompt("enter a day of a week");
day = day.toLowerCase();

switch (day) {
  case "monday":
    console.log("welcome to the new week");
    break;

  case "tuesday":
    console.log("this is your second day of the week");
    break;

  case "wendsday":
    console.log("stiil enjoy your week");
    break;

  case "thursday":
    console.log("tomorow is fri day");
    break;

  case "friday":
    console.log("it is friday the weekend is around the corner");
    break;

  case "saturday":
    console.log("finally the weekend has come");
    break;

  case "sunday":
    console.log("the weekend is almost gone");
    break;
    
  default:
    console.log("this is not a valid day");
    break;
}
