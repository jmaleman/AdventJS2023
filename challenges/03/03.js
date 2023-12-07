/**
 * Puntos: 330
 * Rendimiento: 3106 ops/s
 * Compl. cognitiva: 7
 */


function findNaughtyStep(original, modified) {  
  
  if(original !== modified){    
    const maxLength = Math.max(original.length,modified.length);
    
    for(let i=0; i < maxLength; i++){
     if(original.charAt(i) !== modified.charAt(i)){
       if(original.length > modified.length)
         return original.charAt(i)
       if(original.length < modified.length)
         return modified.charAt(i)
       if(original.length === modified.length)
         return original.chartAt(i)
      }
    }
  }
  return ''
}