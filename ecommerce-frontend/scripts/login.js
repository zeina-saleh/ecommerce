

const login_btn = document.getElementById('login-btn')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')

login_btn.addEventListener('click', async function(){
    email = email_input.value
    password = password_input.value

    formdata = new FormData()
    formdata.append(email)
    formdata.append(password)

    const options = {
        method: 'POST',
        body: formdata
    }

    const response = await fetch('http://127.0.0.1:8000/api/login', options)
    const json = response.json()
    console.log(json)
})