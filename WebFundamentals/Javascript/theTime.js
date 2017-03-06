var HOUR = 5;
var MINUTE = 50;
var PERIOD = "PM";

if (MINUTE > 30){
  MINUTE = "almost";
  HOUR = HOUR + 1;
}
else if (MINUTE < 30) {
  MINUTE = "just after";
}
if (PERIOD === "AM"){
  PERIOD = "in the morning.";
}
else if (PERIOD === "PM"){
  PERIOD = "in the evening.";
}
console.log("It's", MINUTE, HOUR, PERIOD);
