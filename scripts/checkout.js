import { cart } from "./cart.js";
import { removeCartItem } from "./cart.js";


function renderHTML() {
    let ordersHTML = "";
    cart.forEach((item) => {
        ordersHTML += `
        <div class="order-item">
            <div class="delivery-title">
                <p>Delivery date: Friday, June 20th</p>
            </div>
            <div class="order-details">
                <div class="order-image">
                    <img src="" alt="item">
                </div>
                <div class="order-details-info">
                    <p class="item-name">${item.itemName}</p>
                    <p class="item-price">£${(item.itemPrice / 100).toFixed(2)}</p>
                    <p class="item-quantity">${item.quantity}</p>
                </div>
                <div class="order-delivery-details">
                    <p class="order-delivery-title">
                        Choose a delivery option:
                    </p>
                    <div class="delivery-options">
                        <div class="option">
                            <input type="radio" id="free" name="shipping">
                            <label for="free">Free shipping</label>
                            <p class="delivery-price">FREE shipping</p>
                        </div>
                        <div class="option">
                            <input type="radio" id="next" name="shipping">
                            <label for="next">Next day delivery</label>
                            <p class="delivery-price">£6.99</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="js-remove-item" data-item-name="${item.itemName}"> Remove </button>
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
            const currentItem = button.dataset.itemName;
            const order = button.closest(".order-item");
            removeCartItem(order, currentItem);
        });
    });

