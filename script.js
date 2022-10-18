'use strict';

const notificationDots = document.querySelectorAll('.notificationDot');
const markRead = document.querySelector('.container__header__mark');
const notificationNum = document.querySelector('.number');
const notificationSymbol = document.querySelector('.container__header__new')
let notificationCount = 3;



notificationDots.forEach((dot)=> {
      dot.addEventListener('click', () => {
        dot.classList.add('hidden')
        notificationCount--;
        notificationNum.innerText = notificationCount;
        console.log(notificationCount)
        if(notificationCount === 0){
            notificationSymbol.style.backgroundColor = "hsl(219, 85%, 26%)";
        }
    })
})

markRead.addEventListener('click', () => {
    notificationDots.forEach(notification => notification.classList.add('hidden'));
    notificationNum.innerText = 0;
    notificationCount = 0;
    notificationSymbol.style.backgroundColor = "hsl(219, 85%, 26%)"
})

