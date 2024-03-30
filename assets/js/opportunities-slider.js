const cards = document.querySelectorAll('.opportunities__card');

cards.forEach(card => {
    const arrowPref = card.querySelector('.opportunities__arrow--prev');
    const arrowNext = card.querySelector('.opportunities__arrow--next');
    const items = card.querySelectorAll('.opportunities__text');
    const dots = card.querySelectorAll('.opportunities__dot');

    arrowNext.addEventListener('click', () => {
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            if (item.classList.contains('opportunities__text--active')) {
                item.classList.remove('opportunities__text--active')
                dots[index].classList.remove('opportunities__dot--active')
                if (index == (items.length - 1)) {
                    items[0].classList.add('opportunities__text--active')
                    dots[0].classList.add('opportunities__dot--active')
                    break
                }
                else {
                    items[index + 1].classList.add('opportunities__text--active')
                    dots[index + 1].classList.add('opportunities__dot--active')
                    break
                }
            };
        }
    });

    arrowPref.addEventListener('click', () => {
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            if (item.classList.contains('opportunities__text--active')) {
                item.classList.remove('opportunities__text--active')
                dots[index].classList.remove('opportunities__dot--active')
                if (index == 0) {
                    items[items.length - 1].classList.add('opportunities__text--active')
                    dots[items.length - 1].classList.add('opportunities__dot--active')
                    break
                }
                else {
                    items[index - 1].classList.add('opportunities__text--active')
                    dots[index - 1].classList.add('opportunities__dot--active')
                    break
                }
            };
        }
    });

    dots.forEach((element, index) => {
        element.addEventListener('click', () => {
            card.querySelector('.opportunities__dot--active').classList.remove('opportunities__dot--active')
            element.classList.add('opportunities__dot--active')
            items.forEach(item => {
                item.classList.remove('opportunities__text--active')
            });
            items[index].classList.add('opportunities__text--active')
        })
    });

});