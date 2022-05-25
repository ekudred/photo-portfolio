import $ from 'jquery'
import 'slick-carousel'

// ========== HEADER-CLASSIC-PORTFOLIO ==========

export const SLIDERheaderClassicPortfolio = $(document).ready(function() {
    $('.header-classic-portfolio-slider').slick({
        infinite: true,
        slidesToScroll: true,
        draggable: true,
        slidesToShow: 1,
        speed: 500,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000
    })
})

// ========== CLIENTS ==========

export const SLIDEClients = $(document).ready(function() {
    $('.clients-container-slider').slick({
        infinite: true,
        // variableWidth: true,
        draggable: true,
        slidesToScroll: 3,
        slidesToShow: 6,
        speed: 500,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    })
})