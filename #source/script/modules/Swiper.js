import Swiper from 'swiper/bundle'

// ========== FLOW GALLERY ==========

export const flowGallery = new Swiper('.header-flow-gallery-container', {
        effect: 'coverflow',
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '1',
        allowTouchMove: false,
        onlyExternal: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            1000: {
              coverflowEffect: {
                    stretch: 300
                },
            }
        }
});