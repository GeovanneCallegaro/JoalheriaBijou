export function toogleProduct (id) {
    return {
        type: 'TOGGLE_PRODUCT', 
        payload: id
    }
}