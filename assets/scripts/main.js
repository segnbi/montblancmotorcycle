const loader = document.querySelector('.loader')

const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

window.addEventListener('load', () => {
  loader.classList.toggle('remove-loader', true)
})

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('to-close-btn')
  nav.classList.toggle('show-menu')
  body.classList.toggle('body-scrolling')
})