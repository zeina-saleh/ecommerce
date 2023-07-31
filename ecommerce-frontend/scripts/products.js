
function fillCart(items) {
    let cart_ul = document.getElementById('cart-list')
    items.forEach((item) => {
        let cart_item = document.createElement('div')
        cart_item.innerHTML = `<div class="flex gap10">${item.product_id} <i class="fa-solid fa-minus main-nav-links" id="min_btn"></i></div>`
        cart_ul.appendChild(cart_item);
        
        // let cart_btn = document.getElementById(`min_btn${item.id}`)
        // cart_btn.addEventListener('click', function () {
        //     console.log(item.id)
        //     deleteFromCart(item.id)
        // })
    })
}

async function addToCart(item_id) {
    try {
        const user_id = localStorage.getItem('user_id')
        const product_id = item_id

        const formdata = new FormData()
        formdata.append('user_id', user_id)
        formdata.append('product_id', product_id)

        options = {
            method: 'POST',
            body: formdata
        }

        const response = await fetch('http://127.0.0.1:8000/api/add_to_cart', options)
        const json = response.json()
        console.log(json)
    }
    catch (e) {
        console.log("failed to fetch", e)
    }
}

function renderProducts(products) {
    let container = document.getElementById('product-wrapper')
    products.forEach((item) => {
        let product_div = document.createElement('div')

        product_div.innerHTML = `
        <div class="card column product-card al-center gap10" data-id ="${item.id}">
        <img id="img" src="/ecommerce-frontend/assets/default.png" alt="">
        <span id="title" class="product-title">${item.title}</span>
        <span id="price" class="products-price">${item.price}</span>
        <div class="flex gap20 al-center">
            <i class="fa-regular fa-heart main-nav-links"></i>
            <button id="cart_btn${item.id}" class="btn">Add to Cart</button>
        </div></div>`;
        container.appendChild(product_div)

        let hover_div = document.createElement('div')
        hover_div.innerHTML = `
        <div class="hover-div card column center gap10">
        <span id="title" class="product-title">${item.brand_id}</span>
        <span id="title" class="product-title">${item.screen}</span>
        <span id="price" class="products-price">${item.battery}</span>
        <span id="price" class="products-price">${item.description}</span>
        </div>`;
        product_div.appendChild(hover_div)

        // hover_div.addEventListener('click', function(){
        //     localStorage.setItem('product_id', item.id)
        //     window.location.href = '/ecommerce-frontend/views/admin_panel.html'
        // })

        let cart_btn = document.getElementById(`cart_btn${item.id}`)
        cart_btn.addEventListener('click', function () {
            addToCart(item.id)
        })

    })
}

window.onload = async () => {

    admin_panel = document.getElementById('admin-panel')
    admin_panel.addEventListener('click', () => { window.location.href = '/ecommerce-frontend/views/admin_panel.html'})
    // check user type
    if (localStorage.getItem('user_id')==2){
        admin_panel.classList.remove('hidden')
    }


    // get products
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

    // get cart items
    const user_id = localStorage.getItem('user_id')
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/get_cart_items/${user_id}`)
        const json = await response.json()
        const items = json.items
        console.log(items)
        fillCart(items)
    }
    catch (e) {
        console.log('failed to fetch', e)
    }

    // show cart
    const cart_btn = document.getElementById('cart')
    cart_btn.addEventListener('click', async function () {
        const list = document.getElementById('cart-container')
        list.classList.toggle("hidden")
    })

}

const logout_link = document.getElementById('logout-span')
logout_link.addEventListener('click', function(){
    
})