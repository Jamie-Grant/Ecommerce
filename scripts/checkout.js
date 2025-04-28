import { cart } from "./cart.js";
import { removeCartItem } from "./cart.js";
import { items } from "../data/items.js";


function renderHTML() {
    let ordersHTML = "";
    cart.forEach((cartItem) => {
        const itemId = cartItem.itemId;
        let matchingItem;

        items.forEach((item) => {
            if (item.id === itemId) {
                matchingItem = item;
            }
        });

        ordersHTML += `
        <div class="order-item">
            <div class="delivery-title">
                <p>Delivery date: Friday, June 20th</p>
            </div>
            <div class="order-details">
                <div class="order-image">
                    <img src="${matchingItem.image}" alt="item">
                </div>
                <div class="order-details-info">
                    <p class="item-name">${matchingItem.name}</p>
                    <p class="item-price">£${(matchingItem.priceCents / 100).toFixed(2)}</p>
                    <p class="item-quantity">${cartItem.quantity}</p>
                </div>
                <div class="remove-button">
                    <button class="js-remove-item" data-item-id="${matchingItem.id}"> Remove </button>
                </div>
            </div>
        </div>
        `
    });
    document.querySelector(".orders-container").innerHTML = ordersHTML;
}

renderHTML();


document.querySelectorAll(".js-remove-item")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const currentItem = button.dataset.itemId;
            const order = button.closest(".order-item");
            removeCartItem(order, currentItem);
        });
    });


