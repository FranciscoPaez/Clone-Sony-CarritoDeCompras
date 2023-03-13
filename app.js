const shopContent = document.getElementById("shopContent");
const viewCart = document.getElementById("viewCart");
const modalContainer = document.getElementById("modal-container");

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
        cart.push({
            id : product.id,
            img : product.img,
            name : product.name,
            price : product.price
        });
        console.log(cart);
    });
});

viewCart.addEventListener("click", () => {  
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML = `
       <h2 class="modal-header-title">Carrito</h2>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "close";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    cart.forEach((product) => {
        let cartContent = document.createElement("div");
        cartContent.className = "modal-content";
        cartContent.innerHTML = `
           <img src="${product.img}">   
           <h3>${product.name}<h3/>
           <p>$${product.price}</p>
        `;
        
        modalContainer.append(cartContent);
    });

    const total = cart.reduce((acc, el) => acc + el.price, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar:  $${total}`;
    modalContainer.append(totalBuying)
});