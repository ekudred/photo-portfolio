import mixitup from 'mixitup'

// ========== FILTER MIXITUP ==========

export function filterMixItUp() {
    const Mixer = mixitup(document.querySelector('#Gallery-categories'), {
        selectors: {
            target: '.mix'
        }
    })
}