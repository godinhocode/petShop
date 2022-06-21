let loginForm = document.querySelector('.header .login-form')

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active')
  navbar.classList.remove('active')
}

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  loginForm.classList.remove('active')
}

window.onscroll = () => {
  loginForm.classList.remove('active')
  navbar.classList.remove('active')

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active')
    
  } else {
    document.querySelector('.header').classList.remove('active')
  }

  if (window.scrollY > 400) {
    document.querySelector('.backToTopButton').classList.add('active')
  } else {
    document.querySelector('.backToTopButton').classList.remove('active')

  }
}

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').classList.remove('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
`#home,
#about .image, 
#about .content, 
.dog-food .image, 
.cat-food .image, 
#shop .heading, 
#shop .box-container, 
#services .heading, 
#services .box,
#plan .heading,
#plan .box,
#contact .image,
#contact .form`)
