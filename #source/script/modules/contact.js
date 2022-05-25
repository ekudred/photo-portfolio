export function contact() {
    const form = document.querySelector('.contact-container__get-in-touch--form')
    const inputs = document.querySelectorAll('.contact-form-input')

    const formSubmit = (event) => {
        event.preventDefault()

        const flags = {
            notValid: {
                flag: false,
                selector: 'not-valid',
                selectorMessage: 'not-valid-message',
                message() {
                    form.insertAdjacentHTML(
                        'beforeend', 
                        `<div class="${this.selectorMessage}">Validation errors occurred. Please confirm the fields and submit it again.</div>`
                    )
                }
            },
            fail: {
                flag: false,
                selector: 'not-valid',
                selectorMessage: 'fail-message',
                message() {
                    form.insertAdjacentHTML(
                        'beforeend', 
                        `<div class="${this.selectorMessage}">Failed to send your message. Please try later or contact the administrator by another method.</div>`                    )
                }
            }
        }

        const response = () => {
            inputs.forEach(input => {
                if (input.value === '') {
                    input.classList.add(flags.notValid.selector)
                    flags.notValid.flag = true
                } else if (input.classList.contains(flags.notValid.selector)) {
                    input.classList.remove(flags.notValid.selector)
                }
    
                if (input.id == 'contact-email' && input.value.search('@') == -1) {
                    if (!input.classList.contains(flags.fail.selector)) {
                        input.classList.add(flags.fail.selector)
                    }
                    flags.fail.flag = true
                }
            })
    
            Object.values(flags).forEach(flag => {
                if (flag.flag === true && form.children.length === 4) {
                    flag.message()
                } else if (flag.flag === false && document.querySelector('.' + flag.selectorMessage)) {
                    document.querySelector('.' + flag.selectorMessage).remove()
                }
            })
        }

        setTimeout(response, 1000)
    }

    form.addEventListener('submit', formSubmit)
}