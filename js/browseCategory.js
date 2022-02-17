import { createProductsHtml } from "./createPoductsHtml.js";

export function browseCategory(products) {
    const categorySelect = document.querySelector("#category");

    categorySelect.addEventListener("change", () => {
        const choosenCategory = event.target.value;

        createProductsHtml(products)

        if (choosenCategory === "none") return;

        const filteredCategory = products.filter(product => {

            if (choosenCategory === product.category) {
                return true;
            }
        })
        console.log(filteredCategory)
        createProductsHtml(filteredCategory)

    })
}