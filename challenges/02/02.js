/**
 * Puntos: 210
 * Rendimiento: 2596 ops/s
 * Compl. cognitiva: 3
 */
function manufacture(gifts, materials) {
    const _materials = [...materials]
    
    let gifts_final = []
    
    gifts.forEach( gift => {
        if([...gift].every((e) => _materials.includes(e) )){
            gifts_final.push(gift);
        }
    });

    return gifts_final;
}