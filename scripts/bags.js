import { cart } from "./cart.js";
import { items } from "../data/items.js";

let itemsHTML = "";

//takes an object and saves it in item, then runs the function
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

document.querySelectorAll(".js-add-to-cart")
    .forEach((button) => {
        button.addEventListener("click", () => {
            //dataset gets all data attributes of an element, returns an object
            const itemName = button.dataset.itemName;
            const itemPriceCents = button.dataset.itemPrice;
            const quantitySelector = button.closest(".item-info").querySelector(".quantity-selector");
            const selectedQuantity = Number(quantitySelector.value);
            //Create a variable for matching item to be stored. Will clear once next click
            let matchingItem;

            //foreach through cart and check if there are matching items
            cart.forEach((item) => {
                if (item.itemName === itemName) {
                    matchingItem = item;
                }
            });

            //Objects are truthy values, so will return true if object is found in matchingItem
            if (matchingItem) {
                matchingItem.quantity += selectedQuantity;
            } else {
                cart.push({
                    itemName: itemName,
                    itemPrice: Number(itemPriceCents),
                    quantity: selectedQuantity
                });
            }

            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });

            document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
        });
    });



