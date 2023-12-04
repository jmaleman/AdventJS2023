/**
 * Puntos: 220
 * Rendimiento: 3150 ops/s
 * Compl. cognitiva: 2
 */

function findFirstRepeated(gifts) {
  
    let uniqueIds = []
  
    for(let gift of gifts){
      if(!uniqueIds.includes(gift))
        uniqueIds.push(gift)
      else{
        return gift
      }    
    }
    return -1
  }
  