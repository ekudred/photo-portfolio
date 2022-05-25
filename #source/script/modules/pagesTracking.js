// ========== PAGES TRACKING ==========

export function pagesTracking() {
    document.querySelectorAll('a').forEach(item => {
        if (window.location.href === item.href) {
            item.classList.add('active')
            item.addEventListener('click', (event) => {
                event.preventDefault()
            })
        }
    })
}

