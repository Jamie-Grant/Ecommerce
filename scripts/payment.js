import { cart } from "./cart.js";
import { items } from "../data/items.js";

export function renderPayment() {
    let paymentHTML = "";
    let totalPrice = 0;
    const shipping = 5.99;
    let totalItems = 0;

    cart.forEach((cartItem) => {
        const itemId = cartItem.itemId;
        let matchingItem;
        totalItems += cartItem.quantity;

        items.forEach((item) => {
            if (item.id === itemId) {
                matchingItem = item;
                totalPrice += (item.priceCents * cartItem.quantity);
            }
        });
    });

    paymentHTML += `
        <div class="payment-title"> 
            <p>Payment Summary</p>
        </div>
        <div class="payment-quantity">
            <p>Items: ${totalItems}</p>
        </div>
        <div class="payment-delivery">
            <p>Shipping: £${totalPrice ? shipping: (0).toFixed(2)}</p>
        </div>
        <div class="payment-total">
            <p>Payment total: £ ${(totalPrice / 100).toFixed(2)}</p>
        </div>
        <button class="place-order-button">Place your order</button>
    `
    document.querySelector(".payment-container").innerHTML = paymentHTML;
}

