'use strict';

const notificationDot = document.querySelectorAll('.notificationDot');

notificationDot.forEach((dot)=> {
    dot.addEventListener('click', () => {
        dot.classList.add('hidden')
    })
})