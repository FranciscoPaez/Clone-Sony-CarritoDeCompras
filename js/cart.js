const paintCart = () => {  
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
           <div class="row">
               <div class="col-3"><span class="subtract"> - </span></div>
               <div class="col-3"><p>${product.quantity}</p></div>
               <div class="col-3"><span class="add"> + </span></div>
           </div>          
        `;
        
        modalContainer.append(cartContent);

        
        let substract = cartContent.querySelector(".subtract");

        substract.addEventListener("click", () => {
            if (product.quantity !== 1) {
                product.quantity--;
            }
            paintCart();
        });

        let add = cartContent.querySelector(".add");

        add.addEventListener("click", () => {
            product.quantity++;
            paintCart();
        });

    });

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar:  $${total}`;
    modalContainer.append(totalBuying)
};

viewCart.addEventListener("click", paintCart);

const cartCounter = () => {
    cartQuantity.innerText = cart.length;
}