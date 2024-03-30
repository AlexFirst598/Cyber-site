const signin = document.querySelector('.header__login');
const signup = document.querySelector('.header__reg');
const modalLogin = document.querySelector('#login');
const modalReg = document.querySelector('#register');
const closes = document.querySelectorAll('.modal__close');
const fogot = document.querySelector('.modal__fogot');
const fogotPost = document.querySelector('#fogot-post')
const registerForm = document.querySelector('#register-form')
const create_ = document.querySelector('#create')
const enter_ = document.querySelector('#enter')
const eyes = document.querySelectorAll('.modal__eye');
const passwords = document.querySelectorAll('[type="password"]');
const loginForm = document.querySelector('#loginForm');
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

eyes.forEach((eye, index) => {
    eye.addEventListener('click', () => {
        eye.classList.toggle('modal__eye--active')

        if (
            passwords[index].getAttribute('type') == "text"
        ) {
            passwords[index].setAttribute('type', "password")
        }

        else {
            passwords[index].setAttribute('type', "text")
        }
    })
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const passInput = registerForm.querySelectorAll('.modal__input')[2]
    const passRepeat = registerForm.querySelectorAll('.modal__input')[3]
    const mail = registerForm.querySelector('[type="email"]')
    const nick = registerForm.querySelector('[type="text"]')

    if (nick.value.length >= 3 && nick.value.length <= 24 && passInput.value == passRepeat.value && passInput.value.length >= 6 && passInput.value.length <= 18) {
        registerForm.submit()
    }

    else {
        if (nick.value.length < 3 || nick.value.length > 24) {
            nick.nextElementSibling.classList.add('modal__error--active')
        }

        if (passInput.value.length < 6 || passInput.value.length > 18) {
            passInput.nextElementSibling.classList.add('modal__error--active')
        }
        // else {
        //     nick.nextElementSibling.classList.add('modal__error--correct')
        // }

        if (passInput.value != passRepeat.value) {
            passRepeat.nextElementSibling.classList.add('modal__error--active')
        }

        // else {
        //     passRepeat.nextElementSibling.classList.add('modal__error--correct')
        // }
    }

    passInput.addEventListener('input', () => {
        if (passInput.value.length >= 6 && passInput.value.length <= 18) {
            // passInput.nextElementSibling.classList.remove('modal__error--active')

            if (passInput.nextElementSibling.classList.contains('modal__error--active')) {
                passInput.nextElementSibling.classList.add('modal__error--correct')
                passInput.nextElementSibling.textContent = 'Все правильно!'
            }
        }
    });

    passRepeat.addEventListener('input', () => {
        if (passInput.value == passRepeat.value) {
            // passRepeat.nextElementSibling.classList.remove('modal__error--active')

            if (passRepeat.nextElementSibling.classList.contains('modal__error--active')) {
                passRepeat.nextElementSibling.classList.add('modal__error--correct')
                passRepeat.nextElementSibling.textContent = 'Все правильно!'
            }
        }
    });

    nick.addEventListener('input', () => {
        if (nick.value.length >= 3 && nick.value.length <= 24) {
            // nick.nextElementSibling.classList.remove('modal__error--active')

            if (nick.nextElementSibling.classList.contains('modal__error--active')) {
                nick.nextElementSibling.classList.add('modal__error--correct')
                nick.nextElementSibling.textContent = 'Все правильно!'
            }
        }
    });


})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const login = loginForm.querySelector('[type="email"]')
    console.log(login)
    const password1 = loginForm.querySelector('#loginPass')
    const data = [
        { login: 'example1@gmail.com', password: 'qwe123' },
        { login: 'example2@gmail.com', password: 'qwe1234' },
        { login: 'example3@gmail.com', password: 'qwe12345' }]

    const logins = []

    data.forEach(user => {
        logins.push(user['login'])
    })

    for (let index = 0; index < data.length; index++) {
        const user = data[index];

        if (logins.includes(login.value)) {
            login.nextElementSibling.classList.remove('modal__error--active')
            if (user['login'] == login.value && user['password'] == password1.value) {
                loginForm.submit()
                break
            }

            else {
                if (user['login'] != login.value) {
                    continue
                }

                // else {
                //     login.nextElementSibling.classList.remove('modal__error--active')
                //     // break
                // }

                if (user['password'] != password1.value) {
                    password1.nextElementSibling.classList.add('modal__error--active')
                    break
                }

            }
        }
        
        else {
            login.nextElementSibling.classList.add('modal__error--active')
            break
        }
    }
})

const fogotForm = document.querySelector('#fogotForm')

fogotForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const fogotInput = fogotForm.querySelector('[type="email"]')

    const data = [
        'qwe123@gmail.com',
        'qwe1234@gmail.com',
        'qwe1235@gmail.com'
    ]

    

    if (data.includes(fogotInput.value)) {
        const mailText = document.querySelector('#email-value')
        mailText.textContent = fogotInput.value
        remModal(document.querySelector('#fogot-post'))
        showModal(document.querySelector('#fogot-post-code'))
    }

    else {
        fogotInput.nextElementSibling.classList.add('modal__error--active')
    }
});

const codeForm = document.querySelector('#fogot-form')    

    const InputOne = codeForm.querySelector('#InputOne') 
    const InputTwo = codeForm.querySelector('#InputTwo')
    const InputThree = codeForm.querySelector('#InputThree')
    const InputFour = codeForm.querySelector('#InputFour')
    InputOne.addEventListener('input', () => {
        InputTwo.focus()
    })
    InputTwo.addEventListener('input', () => {
        InputThree.focus()
    })
    InputThree.addEventListener('input', () => {
        InputFour.focus()
    })
codeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const codes = ['1222', '1333', '1444', '1555', '1666']

    const number = InputOne.value + InputTwo.value + InputThree.value + InputFour.value
    const codeWrong = codeForm.querySelector('.modal__code-text--wrong')

    if (codes.includes(number)) {
        codeForm.submit()

        
    }
    
    else {
          codeWrong.classList.add('modal__code-text--active')
    }
});


