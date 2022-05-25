// ========== FIXED MENU ==========

export class FixedMenu {
    constructor() {
        // ========= NAVIGATIONS ==========
        this.items = document.querySelectorAll('.header-fixed__navigations-item')
        
        this.button = document.querySelector('.menu-burger')
        this.menu = document.querySelector('.header-fixed__navigations')
        this.bg = document.querySelector('.header-fixed')

        this.dropdownButtons = document.querySelectorAll('.header-fixed__navigations-item-button')
        this.dropdownBlock = document.querySelectorAll('.header-fixed__navigations-item--dropdown')

        // ========= SHARE ==========
        this.shareButton = document.querySelector('.header-fixed__share--button')
        this.shareDropdown = document.querySelector('.header-fixed__share--dropdown')

        // ========= FILTER ==========
        this.filterButtonOpen = document.querySelector('.header-fixed__filter')
        this.filterButtonClose = document.querySelector('.filter-gallery-categories--header svg')
        this.filterCategories = document.querySelector('.filter-gallery-categories')
        
        this.menuOpen()
        this.dropdownOpen()
        this.shareOpen()
        this.filterGallery()
    }
    
    menuOpen() {
        this.button.addEventListener('click', () => {
            if (this.menu.classList.contains('open')) {
                document.body.classList.remove('hidden')
                this.menu.classList.remove('anim')
                this.bg.classList.remove('bg')
                this.button.classList.remove('active')
    
                setTimeout(() => {
                    this.bg.parentElement.classList.remove('height')
                    this.menu.classList.remove('open')
                }, 200)
    
                return
            }
            
            document.body.classList.add('hidden')
            this.button.classList.add('active')
            this.menu.classList.add('open')
            this.bg.classList.add('bg')
            this.bg.parentElement.classList.add('height')
    
            setTimeout(() => {
                this.menu.classList.add('anim')
            }, 20)
        })
    }

    dropdownOpen() {    
        const addIndex = (items) => {
            items.forEach((item, index) => {
                item.dataset.index = index;
            })
        }
        
        addIndex(this.dropdownButtons)
        addIndex(this.dropdownBlock)
        
        this.dropdownButtons.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 800) {
                    if (this.dropdownBlock[item.dataset.index].classList.contains('open')) {
                        item.querySelector('.header-fixed__navigations-item-button--type').classList.remove('open')
                        item.querySelector('svg').classList.remove('open')
                        
                        this.dropdownBlock[item.dataset.index].classList.remove('open')
            
                        return
                    }
        
                    item.querySelector('.header-fixed__navigations-item-button--type').classList.add('open')
                    item.querySelector('svg').classList.add('open')
                    
                    this.dropdownBlock[item.dataset.index].classList.add('open')
                }
            })
        })
    }

    shareOpen() {
        this.shareButton.addEventListener('click', () => {
            this.shareDropdown.classList.toggle('open')
            this.shareButton.classList.toggle('active')
            this.shareButton.querySelector('svg').classList.toggle('active')
        })
    }

    filterGallery() {
        if (this.filterButtonClose) {
            this.filterButtonOpen.addEventListener('click', () => {
                this.filterCategories.style.display = "block"
                setTimeout(() => {
                    this.filterCategories.classList.add('active')
                }, 10)
            })
            this.filterButtonClose.addEventListener('click', () => {
                this.filterCategories.classList.remove('active')

                setTimeout(() => {
                    this.filterCategories.style.display = "none"
                }, 500)
            })
        }
    }
}