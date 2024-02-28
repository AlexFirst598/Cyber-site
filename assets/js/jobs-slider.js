const arrowPref = document.querySelector('.jobs__arrow-prev');
const arrowNext = document.querySelector('.jobs__arrow-next');
const items = document.querySelectorAll('.jobs__item');

arrowNext.addEventListener('click', () => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.classList.contains('jobs__item--active')) {
            console.log(item)
            item.classList.remove('jobs__item--active')
            if (index == (items.length - 1)) {
                items[0].classList.add('jobs__item--active')
                break
            }
            else {
                items[index + 1].classList.add('jobs__item--active')
                break
            }
        };
    }
});

arrowPref.addEventListener('click', () => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.classList.contains('jobs__item--active')) {
            console.log(item)
            item.classList.remove('jobs__item--active')
            if (index == 0) {
                items[items.length - 1].classList.add('jobs__item--active')
                break
            }
            else {
                items[index - 1].classList.add('jobs__item--active')
                break
            }
        };
    }
});

