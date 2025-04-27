import { addToCart, updateCartQuantity } from "./cart.js";
import { items } from "../data/items.js";


function renderHTML() {
    let itemsHTML = "";

    items.forEach((item) => {
        itemsHTML += `
         <div class="item">
            <div class="item-image">
                <img src="${item.image}">
            </div>
            <div class="item-info">
                <div class="item-name">
                    <p>${item.name}</p>
                </div>
                <div class="item-description">
                    <p>${item.description}</p>
                </div>
                <div class="item-price">
                    <p>£${(item.priceCents / 100).toFixed(2)}</p>
                </div>
                <div class="item-quantity">
                    <select class="quantity-selector">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
                <div class="item-add">
                    <button class="js-add-to-cart" data-item-name="${item.name}" data-item-price="${item.priceCents}">Add to cart</button>
                </div>
            </div>
        </div>
         `;
    });
    document.querySelector(".js-items").innerHTML = itemsHTML;
}

renderHTML();


document.querySelectorAll(".js-add-to-cart")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const itemName = button.dataset.itemName;
            const itemPriceCents = button.dataset.itemPrice;
            const quantitySelector = button.closest(".item-info").querySelector(".quantity-selector");
            const selectedQuantity = Number(quantitySelector.value);

            addToCart(itemName, itemPriceCents, selectedQuantity);
            updateCartQuantity();
        });
    });



