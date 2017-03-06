function casino (qtr){
  while(qtr > 0){
    if (Math.floor(Math.random()*100)==3){
      var prize = Math.floor(Math.random()*50+51);
      console.log(prize);
      return(qtr + prize);
    }
    else{qtr --;
      if(qtr === 0){
        return(0);
      }
    }
  }
}
console.log(casino(45));
