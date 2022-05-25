export function boxme() {
    const progressSKILL = () => {
        const bars = document.querySelectorAll('.boxme-section .boxme-progressbar')

        bars.forEach(bar => {
            bar.style.width = bar.parentElement.parentElement.querySelector('.boxme-skill-progress').textContent + "%"
        })
    }

    const tabs = () => {
        const buttonsContainer = document.querySelector('.boxme-tabs__buttons')
        const buttons = document.querySelectorAll('.boxme-tabs__buttons-item')
        const contents = document.querySelectorAll('.boxme-tabs__contents-item')

        const addIndex = (items) => {
            items.forEach((item, index) => {
                item.dataset.index = index
            })
        }

        const contains = (items) => {
            items.forEach(item => {
                if (item.classList.contains('active')) item.classList.remove('active')
            })
        }

        const clickHandler = (event) => {
            let target = event.target

            if (target == buttonsContainer) return

            contains(buttons)
            contains(contents)

            target.classList.add('active')
            contents[target.dataset.index].classList.add('active')
        }

        buttonsContainer.addEventListener('click', clickHandler)

        buttons[0].classList.add('active')
        contents[0].classList.add('active')

        addIndex(buttons)
        addIndex(contents)
    }

    progressSKILL()
    tabs()
}