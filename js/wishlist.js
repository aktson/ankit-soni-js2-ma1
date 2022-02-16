import { displayMessage } from "./displayMessage.js";
import { getFromLocalStorage } from "./localStorageFunctions/getFromLocalStorage.js";


const savedProducts = getFromLocalStorage();

const productContainer = document.querySelector(".products-container");

if (savedProducts.length === 0) {
    displayMessage(".products-container", "message", "Nothing here yet!! ")
}

savedProducts.forEach(product => {

    productContainer.innerHTML += `<div class="card d-flex flex-column justify-content-around" >
                                    <img src="${product.image}" class="card-img mx-auto" alt="...">
                                    <div class="card-body d-flex flex-column justify-content-between gap-2">
                                        <h5 class="card-title flex-1" style="color:gray; font-weight:bold;">${product.title}</h5>
                                        <div>
                                            <p class="card-text" style="color:gray; font-weight:bold;">NOK ${product.price}</p>
                                            <i class="fa-solid fa-heart fav"></i>
                                        <div>
                                    </div>
                                </div>`
})

