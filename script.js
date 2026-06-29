let button = document.getElementById('btn')
let text = document.querySelector('h1')
let login = document.getElementById('login')
let email = document.getElementById('email')
let meeting = document.getElementById('meeting')
let message = document.getElementById('message')

button.addEventListener('click',()=>{
    setTimeout(()=>{
        login.textContent = "New login!";
    },1000)
    setTimeout(()=>{
        email.textContent = "New emails!";
    },2000)
    setTimeout(()=>{
        meeting.textContent = "New meetings!";
    },3000)
    setTimeout(()=>{
        message.textContent = "New messages!";
    },4000)
})
