/**
 * Puntos: 270
 * Rendimiento: 2431 ops/s
 * Compl. cognitiva: 3
 */

function decode(message) { 
    const msgStack = []
    let msgFixed = ''
    
    for(const char of message){    
      if( char === '('){
        msgStack.push(msgFixed);
        
        msgFixed = ''
      } else if( char === ')'){
        const reversed = msgFixed.split('').reverse().join('');      
        msgFixed = msgStack.pop() + reversed;      
      } else {
        msgFixed += char
      }          
    }  
    // Code here
    return msgFixed
  }