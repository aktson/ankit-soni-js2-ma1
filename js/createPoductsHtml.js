import { displayMessage } from "./displayMessage.js";
import { getFromLocalStorage } from "./localStorageFunctions/getFromLocalStorage.js";
import { saveToLocalStorage } from "./localStorageFunctions/saveToLocalStorage.js"

const savedItemsToLocalStorage = getFromLocalStorage();

export function createProductsHtml(products) {
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage(".products-container", "message", "No results")
    }


    products.forEach(product => {
        let cssClass = "";

        const productExists = savedItemsToLocalStorage.find(function (item) {
            return +item.id === product.id
        })
        if (productExists) {
            cssClass = "fav";
        }

        productsContainer.innerHTML += `<div class="card d-flex flex-column justify-content-around" >
                                        <img src="${product.image}" class="card-img mx-auto" alt="...">
                                        <div class="card-body d-flex flex-column justify-content-between gap-2">
                                            <h5 class="card-title flex-1" style="color:gray; font-weight:bold;">${product.title}</h5>
                                            <div>
                                                <p class="card-text" style="color:gray; font-weight:bold;">NOK ${product.price}</p>
                                                <i class="fa-solid fa-heart ${cssClass}" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}" data-image="${product.image}"></i>
                                            <div>
                                        </div>
                                    </div>`
    });
    const favouriteBtn = document.querySelectorAll(".products-container i");

    favouriteBtn.forEach(button => {
        button.addEventListener("click", handleClick);
    })
}

//Click event for favoutie buttons(hearts)
export function handleClick() {
    this.classList.toggle("fav");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;


    const currentProduct = getFromLocalStorage();


    const findCurrentProduct = currentProduct.find(function (product) {
        return product.id === id;
    })


    if (!findCurrentProduct) {
        const product = { id: id, title: title, price: price, image: image };
        currentProduct.push(product);
        saveToLocalStorage(currentProduct)

    } else {
        const newCurrentProduct = currentProduct.filter(product => {
            return product.id !== id;
        })
        saveToLocalStorage(newCurrentProduct);
    }
}



