

const register_btn = document.getElementById('register-btn')
const name_input = document.getElementById('name')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')

register_btn.addEventListener('click', async function(){
    user_name = name_input.value
    email = email_input.value
    password = password_input.value

    formdata = new FormData()
    formdata.append('name', user_name)
    formdata.append('email', email)
    formdata.append('password', password)

    const options = {
        method: 'POST',
        body: formdata
    }

    const response = await fetch('http://127.0.0.1:8000/api/register', options)
    const json = response.json()
    // window.location = '/ecommerce-frontend/views/login.html'
    console.log(json)
})