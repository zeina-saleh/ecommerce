
const container = document.getElementById('product-wrapper')

function renderProducts(products_array){
    products_array.forEach(product => {
        const product = document.createElement('div')
        product.innerHtml = `<div class="card column product-card al-center gap10">
        <img id="img" src="${product.img}" alt="">
        <span id="title" class="product-title">${product.title}</span>
        <span id="price" class="products-price">${product.price}</span>
        <div class="flex gap20 al-center">
            <i class="fa-regular fa-heart main-nav-links"></i>
            <button id="cart_btn" class="btn">Add to Cart</button>
        </div>
    </div>`
    container.appendChild(product)
    });
}

window.onload = () => {
    renderProducts();
}