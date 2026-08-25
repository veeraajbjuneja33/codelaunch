// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href')
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'})
    }
  })
})

// Theme toggle (light/dark)
const themeToggle = document.getElementById('themeToggle')
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light')
  themeToggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙'
})
