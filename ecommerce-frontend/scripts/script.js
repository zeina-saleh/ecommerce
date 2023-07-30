


// admin panel
const add_icon = document.getElementById('add-icon')
const edit_icon = document.getElementById('edit-icon')
const find_btn = document.getElementById('find-btn')
const del_icon = document.getElementById('del-icon')

const add_form = document.getElementById('add-form')
const find_form = document.getElementById('find-form')
const edit_form = document.getElementById('edit-form')
const del_form = document.getElementById('del-form')

add_icon.addEventListener('click', function(){
    add_form.classList.toggle('hidden')
    add_form.classList.toggle('flex')
})
edit_icon.addEventListener('click', function(){
    find_form.classList.toggle('hidden')
    find_form.classList.toggle('flex')
})
find_btn.addEventListener('click', function(){
    edit_form.classList.toggle('hidden')
    edit_form.classList.toggle('flex')
})
del_icon.addEventListener('click', function(){
    del_form.classList.toggle('hidden')
    del_form.classList.toggle('flex')
})