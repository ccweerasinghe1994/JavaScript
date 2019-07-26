var world_champion_male = {
  name: "usen bolt",
  worl_record_time: 9.25
};

var world_champion_female = {
  name: "Florence",
  worl_record_time: 10.49
};

var user = {
  gender: prompt("enter your gender").toLowerCase(),
  time: prompt("enter your time")
};

if (user.gender === "male") {
  if (user.time > world_champion_male.worl_record_time) {
    console.log("try harder");
  } else {
    console.log("your faster than usen bolt");
  }
} else {
    if(user.time>world_champion_female){
        console.log('try harder')
    }
    else{
        console.log("your faster than florence");
    }
}
