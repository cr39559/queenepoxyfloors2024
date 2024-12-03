window.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector('.openMenuBtn')
    const closeMenuBtn = document.querySelector('.closeMenuBtn')
    const menu = document.querySelector('.mobile--menu')

    openMenuBtn.addEventListener('click', () => {
        menu.style.display = 'flex'
    })

    closeMenuBtn.addEventListener('click', () => {
        menu.style.display = 'none'
    })
})