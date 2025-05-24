const contactBtn = document.querySelectorAll('.contact-button')
const contactSection = document.getElementById('contact-section')

contactBtn.forEach((button) => {
    button.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" })
    })
})
