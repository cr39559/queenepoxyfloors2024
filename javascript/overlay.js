window.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container')

    imageContainers.forEach(container => {
        const overlay = container.querySelector('.overlay')
        const readBtn = container.querySelector('.readmore')

        container.addEventListener('click', () => {
            if (overlay.style.opacity === '1') {
                overlay.style.opacity = '0'
                readBtn.style.display = 'block'
            } else {
                overlay.style.opacity = '1'
                readBtn.style.display = 'none'
            }
        })
    })
})
