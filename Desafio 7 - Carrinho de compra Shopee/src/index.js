import createItem from "./services/items.js";
import * as cartService from "./services/cart.js";

console.log("🛒 Welcome to the Shopping Cart!");

const myCart = [];

const item1 = await createItem("Notebook", 4500, 1);
const item2 = await createItem("Mouse Gamer", 180, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

console.log("\n========== CARRINHO ==========");

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

console.log("\n========== REMOVENDO 1 MOUSE ==========");

await cartService.removeItem(myCart, 1);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

console.log("\n========== DELETANDO O NOTEBOOK ==========");

await cartService.deleteItem(myCart, 0);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);