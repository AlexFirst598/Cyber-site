    const signin = document.querySelector('.header__login');
    const signup = document.querySelector('.header__reg');
    const modalLogin = document.querySelector('#login');
    const modalReg = document.querySelector('#register');
    const closes = document.querySelectorAll('.modal__close');
    const fogot = document.querySelector('.modal__fogot');
    const fogotPost = document.querySelector('#fogot-post')
    const create_ = document.querySelector('#create')
    const enter_ = document.querySelector('#enter')
    function showModal(modal) {
        // modal.classList.add('modal--active')
        $(modal).fadeIn(300)
        
    }
    function remModal(modal) {
        // modal.classList.remove('modal--active')
        $(modal).fadeOut(300)
    }

    closes.forEach(close_ => {
        const modal = close_.parentElement.parentElement.parentElement.parentElement
        close_.addEventListener('click', () => {
            remModal(modal)
        });
    });

    fogot.addEventListener('click', () => {
        remModal(modalLogin)
        showModal(fogotPost)
    });

    signin.addEventListener('click', () => {
        showModal(modalLogin)
    });

    signup.addEventListener('click', () => {
        showModal(modalReg)
    });
    
    create_.addEventListener('click', (event) => {
        event.preventDefault()
        remModal(modalLogin)
        showModal(modalReg)
    });

    enter_.addEventListener('click', (event) => {
        event.preventDefault()
        remModal(modalReg)
        showModal(modalLogin)
    });