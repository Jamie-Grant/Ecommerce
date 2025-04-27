export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
    cart = [{}]
}

function updateStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

export function addToCart(itemName, itemPriceCents, selectedQuantity) {
    let matchingItem;

    cart.forEach((item) => {
        if (item.itemName === itemName) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
    } else {
        cart.push({
            itemName: itemName,
            itemPrice: Number(itemPriceCents),
            quantity: selectedQuantity
        });
    }
    console.log(cart);
    updateStorage();
}

export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}


export function removeCartItem(order, name) {
    let newCart = [];
    cart.forEach((item) => {
        let newQuantity = item.quantity - 1;

        if (item.itemName !== name) {
            newCart.push(item);
        } else if (newQuantity !== 0) {
            item.quantity = newQuantity;
            newCart.push(item);
            order.querySelector(".item-quantity").innerHTML = newQuantity;
        } else if (newQuantity === 0) {
            order.remove();
        }
    });
    cart = newCart;
    updateStorage();
}

