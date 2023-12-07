/**
 * Puntos: 210
 * Rendimiento: 2596 ops/s
 * Compl. cognitiva: 3
 */

function manufacture(gifts, materials) {
    const _materials = [...materials]
    return gifts.filter( (gift) => [...gift].every((e) => _materials.includes(e) ) )

}