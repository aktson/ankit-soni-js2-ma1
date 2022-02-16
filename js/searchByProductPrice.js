import { createProductsHtml } from "./createPoductsHtml.js";

//on keyup search event
export function searchByProductPrice(products) {
    const searchInput = document.querySelector(".search");

    searchInput.addEventListener("keyup", () => {

        const searchValue = event.target.value.trim();
        createProductsHtml(products);

        if (!searchValue) return;

        const searchProduct = products.filter(product => {
            if (searchValue >= +product.price) {
                return true;
            }

        })
        createProductsHtml(searchProduct);


    });

};

