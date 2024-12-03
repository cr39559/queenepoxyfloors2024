window.addEventListener('DOMContentLoaded', () => {
    const showcase = document.querySelector('.showcase')
    const showcaseImg = document.querySelector('.showcase--img')
    const prevBtn = document.querySelector('.back')
    const nextBtn = document.querySelector('.next')
    const showcaseTitle = document.querySelector('.showcase h1')

    let currentAlts = []
    let currentImages = []
    let currentIndex = 0

    const imageContainers = document.querySelectorAll('article .article .images')

    imageContainers.forEach(container => {
        const images = container.querySelectorAll('.image')

        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentImages = Array.from(container.querySelectorAll('.image')).map(image => image.src)
                currentAlts = Array.from(container.querySelectorAll('.image')).map(image => image.alt)

                currentIndex = index

                showcaseImg.src = currentImages[currentIndex]
                showcaseTitle.textContent = currentAlts[currentIndex]

                showcase.style.display = 'flex'
            })
        })
    })

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        if (currentImages.length === 0) return

        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length

        showcaseImg.src = currentImages[currentIndex]
        showcaseTitle.textContent = currentAlts[currentIndex]
    })

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        if (currentImages.length === 0) return

        currentIndex = (currentIndex + 1) % currentImages.length

        showcaseImg.src = currentImages[currentIndex]
        showcaseTitle.textContent = currentAlts[currentIndex]
    })

    showcase.addEventListener('click', (e) => {
        if (e.target === showcase) {
            showcase.style.display = 'none'
        }
    })
})