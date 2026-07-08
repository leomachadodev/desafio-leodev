async function addItem(userCart, item) {
    userCart.push(item);
}

async function displayCart(userCart) {
    console.log("\n🛒 Shopping Cart");

    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | Quantidade: ${item.quantity}`
        );
    });
}

async function calculateTotal(userCart) {
    const total = userCart.reduce((total, item) => {
        return total + item.subtotal;
    }, 0);

    console.log("\n💰 Total:");
    console.log(`R$ ${total}`);
}

async function removeItem(userCart, index) {
    const item = userCart[index];

    if (!item) {
        console.log("Item não encontrado.");
        return;
    }

    if (item.quantity > 1) {
        item.quantity--;
        item.subtotal = item.price * item.quantity;
    } else {
        userCart.splice(index, 1);
    }
}

async function deleteItem(userCart, index) {
    userCart.splice(index, 1);
}

async function getItems(userCart) {
    return userCart;
}

export {
    addItem,
    displayCart,
    calculateTotal,
    removeItem,
    deleteItem,
    getItems
};