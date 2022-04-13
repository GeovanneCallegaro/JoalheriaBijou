export const selectAllProducts = state => state.products
export const selectSelectedProducts = state => state.products.filter(product => product.selected);
export const totalPriceProducts = state => state.products
    .filter(product => product.selected)
    .reduce((a, b) => +a + +b.price, 0)