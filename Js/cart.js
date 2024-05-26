let carts = document.querySelectorAll('.add-cart');

let products = [
{
    name: 'Pendora',
    tag: 'pure',
    price: 700000,
    inCart: 0
},
{
    name: 'Scarlet',
    tag: 'scarlet',
    price: 8000,
    inCart: 0
},
{
    name: 'Smart Collection',
    tag: 'smart',
    price: 2000,
    inCart: 0
},
{
    name: 'Maison',
    tag: 'maison',
    price: 3000,
    inCart: 0
},
{
    name: 'cyan Tshirt',
    tag: 'cyantshirt',
    price: 20,
    inCart: 0
}
]
for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalcost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    localStorage.setItems('cartNumbers',  1);
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if ( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1; 
    } else {
        localStorage.setItem('cartNumbers', 1
    );
    document.querySelector('.cart span').textContent = 1; 
    }
   setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
    
    } 

    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}




function totalcost(product) {
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalcost');
    console.log("My cartCost is ", cartCost);

    if(cartCost != null) {
        cartCost =  parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost + product.price);
    } else {
        localStorage.setItem("totalcost", product.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems =  JSON.parse(cartItems);
     let productContainer = document.querySelector(".products");
     let cartCost = localStorage.getItem('totalcost');

     console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="trash-outline"></ion-icon>
                    <img src="/images/ ${item.tag}.jpg"><span>${item.name}</span>
                </div>
                <div class="price">${item.price}
            </div>
            <div class="quantity">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
            `;
        }); 

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}, 00</h4> 
        </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();