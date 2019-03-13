var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let itemName = item;
 let itemPrice = Math.floor(Math.random() * 100);
 cart.push({itemName,itemPrice});
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length) {
    return `Your shopping cart is empty.`
  }
  return cart.reduce((a,c,i,arr) => ` ${c.itemName} at ${c.itemPrice}${i === arr.length -1 ? "." : ","}`,"In your cart, you have");
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
