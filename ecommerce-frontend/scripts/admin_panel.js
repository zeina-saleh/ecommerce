
const add_icon = document.getElementById('add-icon')
const edit_icon = document.getElementById('edit-icon')
const del_icon = document.getElementById('del-icon')
const find_btn = document.getElementById('find-btn')
const del_btn = document.getElementById('del-btn')
const add_btn = document.getElementById('add-btn')

const add_form = document.getElementById('add-form')
const find_form = document.getElementById('find-form')
const edit_form = document.getElementById('edit-form')
const del_form = document.getElementById('del-form')
const del_card = document.getElementById('del-card')

// function to  toggle hidden and flex classes
function hideUnhideElement(element) {
    element.classList.toggle('hidden')
    element.classList.toggle('flex')
}

add_icon.addEventListener('click', function () {
    hideUnhideElement(add_form)
})
edit_icon.addEventListener('click', function () {
    hideUnhideElement(find_form)
})
del_icon.addEventListener('click', function () {
    hideUnhideElement(del_form)
})

const edit_input = document.getElementById('find-input')
const del_input = document.getElementById('del-input')


// function to find product by id
async function findProduct(product_id) {
    if (product_id.length != 0) {
        let formdata = new FormData()
        formdata.append('id', product_id)
        let options = {
            method: 'POST',
            body: formdata
        }
        // to be filled
        try {
            const response = await fetch('', options)
            const json = await response.json()
            return json
        } catch (e) {
            console.log('failed to fetch', e)
        }
    } else return false
}

function fillEditForm(){
    // TO BE FILLED


}

find_btn.addEventListener('click', async function () {
    let product_id = edit_input.value
    find_btn.disabled = true;
    if (product_id != "") {
        const product = findProduct(product_id)
        if (product) {
            edit_input.value = 'Found'
            hideUnhideElement(find_form)
            hideUnhideElement(edit_form)
            find_btn.disabled = false
            edit_input.value = ""
            fillEditForm()
        }
    } else {
        edit_input.value = 'Product not Found'
    }
})

function deleteProduct(id) {
    // to be filled
    console.log("deleted", id)
}

del_btn.addEventListener('click', async function () {
    let product_id = del_input.value
    del_btn.disabled = true;
    // check if user didn't send empty string
    if (product_id != "") {
        // check if product is found
        if (findProduct(product_id)) {
            del_input.value = 'Found'

            // user consent
            const consent = document.createElement('h4')
            consent.innerText = 'Are you sure you want to remove product?(y/n)'
            del_card.appendChild(consent)
            const consent_input = document.createElement('input')
            consent_input.classList.add('input')
            del_card.appendChild(consent_input)

            // if yes delete product otherwise hide delete form
            consent_input.addEventListener('change', function () {
                if (consent_input.value == 'y' || consent_input.value == 'Y') { deleteProduct(product_id); }
                else { hideUnhideElement(del_form) }
            })
        }
    } else {
        del_input.value = 'Product not Found'
    }
})