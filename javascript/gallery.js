window.addEventListener('DOMContentLoaded', () => {
    const showcase = document.querySelector('.showcase')
    const showcaseImg = document.querySelector('.showcase img')
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')
    const images = document.querySelectorAll('.image')

    let currentImages = []
    let currentIndex = 0

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImages = Array.from(document.querySelectorAll('.image')).map(image => image.src)

            currentIndex = index

            showcaseImg.src = currentImages[currentIndex]

            showcase.style.display = 'flex'
        })
    })

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        if (currentImages.length === 0) return

        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length

        showcaseImg.src = currentImages[currentIndex]
    })

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        if (currentImages.length === 0) return

        currentIndex = (currentIndex + 1) % currentImages.length

        showcaseImg.src = currentImages[currentIndex]
    })

    showcase.addEventListener('click', (e) => {
        if (e.target === showcase) {
            showcase.style.display = 'none'
        }
    })
})