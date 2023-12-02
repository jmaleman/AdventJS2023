function findFirstRepeated(gifts) {
  
    let uniqueIds = []
  
    for(let gift of gifts){
      if(!uniqueIds.includes(gift))
        uniqueIds.push(gift)
      else{
        return gift
      }    
    }
    
    return -1;
  }
  