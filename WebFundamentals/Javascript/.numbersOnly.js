var numbersOnly = ();
function copy(arr){
  for(var i = 0; i < arr.length; i++)
  if(arr[i] === "number"){
  numbersOnly.push(i);

    return numbersOnly;
  }
console.log(numbersOnly);
}
copy(3, zoo, 56);
