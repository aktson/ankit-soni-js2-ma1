export function getFromLocalStorage() {
    const products = localStorage.getItem("wishListProducts");

    if (!products) {
        return [];
    } else {
        return JSON.parse(products);
    }

}