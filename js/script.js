import { displayMessage } from "./displayMessage.js";
import { searchByProductPrice } from "./searchByProductPrice.js";
import { createProductsHtml } from "./createPoductsHtml.js";
import { browseCategory } from "./browseCategory.js";


const url = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
    try {
        const response = await fetch(url);
        const products = await response.json();

        createProductsHtml(products)
        searchByProductPrice(products)
        browseCategory(products)

    }
    catch (error) {
        displayMessage(".products-container", "error", error)
    }
}

fetchProducts();






