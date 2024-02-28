const arrowPref = document.querySelector('.card__arrow--left');
const arrowNext = document.querySelector('.card__arrow--right');
const items = document.querySelectorAll('.card__item');

arrowNext.addEventListener('click', () => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.classList.contains('card__item--active')) {
            console.log(item)
            item.classList.remove('card__item--active')
            if (index == (items.length - 1)) {
                items[0].classList.add('card__item--active')
                break
            }
            else {
                items[index + 1].classList.add('card__item--active')
                break
            }
        };
    }
});

arrowPref.addEventListener('click', () => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.classList.contains('card__item--active')) {
            console.log(item)
            item.classList.remove('card__item--active')
            if (index == 0) {
                items[items.length - 1].classList.add('card__item--active')
                break
            }
            else {
                items[index - 1].classList.add('card__item--active')
                break
            }
        };
    }
});

function visibleSlides() {
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.classList.contains('card__item--active')) {
            
        }
    }
}

