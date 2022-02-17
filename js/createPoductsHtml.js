import { displayMessage } from "./displayMessage.js";
import { getFromLocalStorage } from "./localStorageFunctions/getFromLocalStorage.js";
import { saveToLocalStorage } from "./localStorageFunctions/saveToLocalStorage.js"

const savedItemsToLocalStorage = getFromLocalStorage();

export function createProductsHtml(products) {
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage(".products-container", "message", "No results")
    };
    //running loop on products
    products.forEach(product => {
        let cssClass = "";

        //looking for product id if matches with id which is saved to local storage
        const productExists = savedItemsToLocalStorage.find(function (item) {
            return +item.id === product.id
        })
        //if prodcut exists in localstorage then add fav class
        if (productExists) {
            cssClass = "fav";
        }

        productsContainer.innerHTML += `<div class="card d-flex flex-column justify-content-around" >
                                        <img src="${product.image}" class="card-img mx-auto" alt="${product.title}">
                                        <div class="card-body d-flex flex-column justify-content-between gap-2">
                                            <h5 class="card-title flex-1" style="color:gray; font-weight:bold;">${product.title}</h5>
                                            <div>
                                                <p class="card-text" style="color:gray; font-weight:bold;">NOK ${product.price}</p>
                                                <i class="fa-solid fa-heart ${cssClass}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image}"></i>
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

    //find current product and match id if there is any product
    const findCurrentProduct = currentProduct.find(function (product) {
        return product.id === id;
    })

    //if there is not any product in local storage with found id then create one and push products
    if (!findCurrentProduct) {
        const product = { id: id, title: title, price: price, image: image };
        currentProduct.push(product);
        saveToLocalStorage(currentProduct)

    }
    //else filter products and don't return product which matches with product exists in local storage and return new current product
    else {
        const newCurrentProduct = currentProduct.filter(product => {
            return product.id !== id;
        })
        saveToLocalStorage(newCurrentProduct);
    }
}



