

function renderProducts(products) {
    let container = document.getElementById('product-wrapper')
    products.forEach((item) => {
        let product_div = document.createElement('div')
        
        product_div.innerHTML = `
        <div class="card column product-card al-center gap10">
        <img id="img" src="/ecommerce-frontend/assets/default.png" alt="">
        <span id="title" class="product-title">${item.title}</span>
        <span id="price" class="products-price">${item.price}</span>
        <div class="flex gap20 al-center">
            <i class="fa-regular fa-heart main-nav-links"></i>
            <button id="cart_btn" class="btn">Add to Cart</button>
        </div></div>`;
        container.appendChild(product_div)
    });
}

window.onload = async () => {

    try {
        const response = await fetch('http://127.0.0.1:8000/api/products/')
        let json = await response.json()
        let products = json.products
        console.log(json)
        renderProducts(products);
    }
    catch (e) {
        console.log("failed to fetch", e)
    }
}