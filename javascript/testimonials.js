window.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial')

    testimonials.forEach(testimonial => {
        const readMoreBtn = testimonial.querySelector('.readmore')
        
        let expanded = false

        if (testimonial.scrollHeight > testimonial.clientHeight) {
            testimonial.addEventListener('click', () => {
                if (expanded) {
                    testimonial.style.height = '300px'
                    readMoreBtn.style.display = 'block'
                    expanded = false
                } else {
                    testimonial.style.height = 'min-content'
                    readMoreBtn.style.display = 'none'
                    expanded = true
                }
            })
        }
    })
})
