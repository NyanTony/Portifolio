let btnAbrir  = document.getElementById('btn-abrir')

let menu = document.getElementById('mob-menu')

let flow = document.getElementById('overflow')


btnAbrir.addEventListener('click',()=>(
    menu.classList.add('abrir-menu')
))

menu.addEventListener('click',()=>(
    menu.classList.remove('abrir-menu')
))

flow.addEventListener('click',()=>(
    menu.classList.remove('abrir-menu')  
))