const toggleBtn = document.getElementById('menu-toggle')
const sidebar = document.getElementById('sidebar')
const themeToggle = document.getElementById('theme-toggle')
const themeIcon = themeToggle.querySelector('i')

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (document.body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun')
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon')
  }
})
