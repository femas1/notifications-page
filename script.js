'use strict';

const notificationDots = document.querySelectorAll('.notificationDot');
const markRead = document.querySelector('.container__header__mark');
const notificationNum = document.querySelector('.number');


notificationDots.forEach((dot)=> {
    dot.addEventListener('click', () => {
        dot.classList.add('hidden')
    })
})

markRead.addEventListener('click', () => {
    notificationDots.forEach(notification => notification.classList.add('hidden'));
    notificationNum.innerText = 0;
})