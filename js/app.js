const shopContent = document.getElementById("shopContent");
const viewCart = document.getElementById("viewCart");
const modalContainer = document.getElementById("modal-container");
const cartQuantity = document.getElementById("cartQuantity")

let cart = [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
      <img src="${product.img}" class="img-prod"/>
      <h3 class="name">${product.name}<h3/>
      <h4 class="brand">${product.brand}</h4>
      <p class="price">1 pago de $${product.price}<p/>
      <span class="credit-debit">Tarjeta de Crédito o D. Bancario</span>
    `;  

    shopContent.append(content);

    let buy = document.createElement("button");
    buy.innerText = "Buy";
    buy.className = "buy"

    content.append(buy);

    buy.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            cart.map((prod) => {
                if(prod.id === product.id){
                    prod.quantity++;
                }
            });
        } else {
            cart.push({
                id : product.id,
                img : product.img,
                name : product.name,
                price : product.price,
                quantity : product.quantity,
            });
        }
        console.log(cart);
        cartCounter();
    });
});

