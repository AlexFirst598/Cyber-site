const arrowPref = document.querySelector('.jobs__arrow-prev');
const arrowNext = document.querySelector('.jobs__arrow-next');
const items = document.querySelectorAll('.jobs__item');
const texts = [
    "Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами и клубами.",
    "Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград.",
    "Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч.",
    "Судит и принимает важные решения в матчах и турнирах. Рейтинг судьи зависит от оценки его деятельности дргуими игроками и организаторами.",
    "Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.",
    "Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей.",
    "Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов статистических показателей найденных пользователей или сообществ будет меняться его рейтинг."
];
const jobs = document.querySelector('.jobs__info');

arrowNext.addEventListener('click', () => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.classList.contains('jobs__item--active')) {
            console.log(item)
            item.classList.remove('jobs__item--active')
            if (index == (items.length - 1)) {
                items[0].classList.add('jobs__item--active')
                jobs.textContent = texts[0]
                break
            }
            else {
                items[index + 1].classList.add('jobs__item--active')
                jobs.textContent = texts[index + 1]
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
                jobs.textContent = texts[items.length - 1]
                break
            }
            else {
                items[index - 1].classList.add('jobs__item--active')
                jobs.textContent = texts[index - 1]
                break
            }
        };
    }
});

items.forEach((element, index) => {
    element.addEventListener('click', () => {
        document.querySelector('.jobs__item--active').classList.remove('jobs__item--active')
        element.classList.add('jobs__item--active')
        jobs.textContent = texts[index]
    })
});

 

