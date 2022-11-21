    // Sticky_Header
    const header = document.querySelector('.header-wrapper')
    window.addEventListener('scroll', fixHeader)
    
    function fixHeader() {
        if(window.scrollY > header.offsetHeight + 50){
            header.classList.add('active')
        } else{
            header.classList.remove('active')
    
        }
    }