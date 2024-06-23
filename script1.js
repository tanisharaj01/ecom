let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let cartOverlay = document.querySelector('.cart-overlay');
let cartItems = document.querySelector('.listcart');
let cartCount = document.querySelector('.cart-count');

let products = [
    {
        "id": 1,
        "name": "Deep V-Necked Maxi Dress",
        "price": 3000,
        "image": "best1.jpg"
    },
    {
        "id": 2,
        "name": "Off-Shoulder Mermaid Dress",
        "price": 2000,
        "image": "best2.jpg"
    },
    {
        "id": 3,
        "name": "Purple Sequencied Dress",
        "price": 3500,
        "image": "best3.jpg"
    },
    {
        "id": 4,
        "name": "Off-Shoulder Ruffed Dress",
        "price": 3000,
        "image": "best10.jpg"
    },
    {
        "id": 5,
        "name": "Bewitching Gold-Peach Lahenga",
        "price": 3000,
        "image": "best4.jpg"
    },
    {
        "id": 6,
        "name": "Black Indian Sharara",
        "price": 3000,
        "image": "best5.jpg"
    },
    {
        "id": 7,
        "name": "Stunning Blue Gown",
        "price": 3500,
        "image": "best6.jpg"
    },
    {
        "id": 8,
        "name": "Baby-Pink Georgette Dress",
        "price": 3000,
        "image": "best11.jpg"
    },
    {
        "id": 9,
        "name": "Blue Pre-Stiched Saree",
        "price": 3000,
        "image": "best7.jpg"
    },
    {
        "id": 10,
        "name": "Blue Dhoti Saree",
        "price": 2500,
        "image": "best8.jpg"
    },
    {
        "id": 11,
        "name": "Silk Designer Saree",
        "price": 3000,
        "image": "best9.jpg"
    },
    {
        "id": 12,
        "name": "Turquoise Blue Organza",
        "price": 3000,
        "image": "best12.jpg"
    },
    {
        "id": 13,
        "name": "Maroon Silk Saree",
        "price": 3000,
        "image": "best13.jpg"
    },
    {
        "id": 14,
        "name": "Hemang Silk Saree",
        "price": 5000,
        "image": "best14.jpg"
    },
    {
        "id": 15,
        "name": "Blue Sequienced Saree",
        "price": 3000,
        "image": "best15.jpg"
    }
];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});


closeCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});

// Add products to product list
let productContainer = document.querySelector('.product-list .item');
products.forEach(product => {
    let productHTML = `
    
        <div class="product" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: ₹${product.price}</p>
            <br><br>
            <button class="add-to-cart">Add to Cart</button>
            <button class="buynow"> BUY NOW </button>
        </div>

    `;
    productContainer.innerHTML += productHTML;
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let itemHTML = `
            <div class="cart-item" data-id="${item.id}">
                <span><img src="${item.image}"></span>
                <span class="name">${item.name}  </span>
                <span class="cost">₹${item.price}</span>
                <button class="remove-item">Remove</button>
            </div>
        `;
        cartItems.innerHTML += itemHTML;
    });
    cartCount.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        let productId = e.target.closest('.product').dataset.id;
        let product = products.find(p => p.id == productId);
        cart.push(product);
        updateCart();
    }
});

// Remove item from cart
cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        let productId = e.target.closest('.cart-item').dataset.id;
        cart = cart.filter(item => item.id != productId);
        updateCart();
    }
});

updateCart();
