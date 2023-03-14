const PaintCart = () => {  
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
           <p>Cantidad: ${product.quantity}</p>
        `;
        
        modalContainer.append(cartContent);

        let remove = document.createElement("span");
        remove.innerText = "x";
        remove.className = "delete-product";
        cartContent.append(remove);

        remove.addEventListener("click", removeProduct)
    });

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar:  $${total}`;
    modalContainer.append(totalBuying)
};

viewCart.addEventListener("click", PaintCart);

const removeProduct = () => {
    const foundId = cart.find((element) => element.id);

    cart = cart.filter((cartId) => {
        return cartId !== foundId;
    });
    
    cartCounter();
    PaintCart();
};

const cartCounter = () => {
    cartQuantity.innerText = cart.length;
}