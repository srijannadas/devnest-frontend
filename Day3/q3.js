for(let i = 1; i<=num; i++){
  if(i%3 == 0 && i%4 == 0){
    arr.push("devsnest");
  }
  if(i%3 == 0 && i%4 != 0){
    arr.push("devs");
  }
   if(i%3 != 0 && i%4 ==0){
    arr.push("nest");
  }
}
