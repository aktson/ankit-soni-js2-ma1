export function getFromLocalStorage() {
    const products = localStorage.getItem("wishlistProducts");

    if (!products) {
        return [];
    } else {
        return JSON.parse(products);
    }

}