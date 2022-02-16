
export function saveToLocalStorage(product) {
    localStorage.setItem("wishListProducts", JSON.stringify(product))
}
