function  addToCart(cart, product){
    let found = false
    for( let i =0; i <cart.length;i++){
        if(cart[i].id===product.id){
            cart[i].quantity +=1
            found  =true
            break
        }
    }
    if(!found){
        cart.push({
            ...product,
            quantity:1
        })
    }
}


function removeFromCart(cart, id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity -= 1;
      } else {
        cart.splice(i, 1);
      }

      break;
    }
  }
}

function getTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}


const cart = [];

const productA = { id: 1, title: "Product A", price: 200 };
const productB = { id: 2, title: "Product B", price: 300 };

addToCart(cart, productA);
addToCart(cart, productA);
addToCart(cart, productB);

console.log(cart);

removeFromCart(cart, 1);
console.log(cart);

removeFromCart(cart, 1);
console.log(cart);

console.log("Total:", getTotal(cart));