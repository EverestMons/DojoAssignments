
function copy(arr){
  var numbersOnly = [];
  for(var i = 0; i < arr.length; i++){
  if(typeof arr[i] === "number"){
  numbersOnly.push(arr[i]);
}
}
console.log(numbersOnly);
}
copy([50, "zoo", 45, 67]);
