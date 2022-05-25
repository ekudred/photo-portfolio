export function preload() {
    const images = document.images
    const imagesTotalCount = images.length
    const preloader = document.getElementById('page-preloader')

    let imagesLoaderCount = 0

    const imageLoader = () => {
        imagesLoaderCount++

        if (imagesLoaderCount >= imagesTotalCount) {
            window.onload = function () {
                setTimeout(() => {
                    if (!preloader.classList.contains('done')) {
                        preloader.classList.add('done')
                    }
                }, 1000)
            }
        }
    }

    for (let i = 0; i < imagesTotalCount; i++) {
        let imageClone = new Image()
        imageClone.onload = imageLoader
        imageClone.onerror = imageLoader
        imageClone.src = images[i].src
    }
}