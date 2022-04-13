export const selectAllProducts = state => state.products
export const selectSelectedProducts = state => state.products.filter(product => product.selected);
export const totalPriceProducts = state => state.products
    .filter(product => product.selected)
    .reduce((a, b) => +a + +b.price, 0)
export const selectFourProducts = state => state.products.filter(product => product.id < 5)
export const selectFiveProducts = state => state.products.filter(product => product.id >= 5)