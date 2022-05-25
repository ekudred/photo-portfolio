import {preload} from './modules/preloader'
import {SLIDERheaderClassicPortfolio, SLIDEClients} from './modules/slickSlider'
import {FixedMenu} from './modules/FixedMenu'
import {boxme} from './modules/boxme'
import {fslightbox} from 'fslightbox'
import {filterMixItUp} from './modules/filterMixItUp'
import {pagesTracking} from './modules/pagesTracking'
import {flowGallery} from './modules/Swiper'
import {contact} from './modules/contact'

new FixedMenu
preload()
if (document.querySelector('.portfolio-filter')) filterMixItUp()
if (document.querySelector('.boxme')) boxme()
if (document.querySelector('.contact')) contact()
pagesTracking()

document.querySelectorAll('.gallery-categories-item img').forEach(item => {
    item.style.display = "none"
    item.parentNode.style.backgroundImage = `url("${item.src}")`
})