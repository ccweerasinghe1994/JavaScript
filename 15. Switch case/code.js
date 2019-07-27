var user_input = prompt("please enter a season").toLowerCase();
switch (user_input) {
  case "autum":
    console.log("it is autumn time!");
    break;
  case "fall":
    console.log("it is fall time!");
    break;
  case "winter":
    console.log("it is winter time!");
    break;
  case "summer":
    console.log("it is summer time!");
    break;
  default:
    console.log("do not recognize that season");
    break;
}
